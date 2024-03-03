# from flask import Flask, request, jsonify
# import sqlite3
# import pandas as pd
# import json

# app = Flask(__name__)

# @app.route('/get_predictions', methods=['POST'])
# def get_predictions():
#     try:
#         # Get the entity name from the POST request
#         entity_name = json.loads(request.data.decode("UTF-8"))["entity_name"]

#         print(entity_name)

#         # Connect to the SQLite database
#         conn = sqlite3.connect('renewable_predictions_test.db')
        

#         # Query the database for predictions of the provided entity
#         query = f"SELECT * FROM predictions WHERE Entity = ?"
#         result = pd.read_sql_query(query, conn, params=(entity_name,))

        
#         # Close the database connection
#         conn.close()
        
 
#         # Convert the result to JSON and return it
#         if not result.empty:
#             return jsonify(result.to_dict(orient='records'), result.to_dict(orient='records'))
#         else:
#             return jsonify({'message': 'Entity not found'}), 404

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    

# @app.route('/get_confidence_level', methods=['POST'])
# def get_confidence_level():
#     try:
#         # Get the entity name from the POST request
#         entity_name = json.loads(request.data.decode("UTF-8"))["entity_name"]

#         print( entity_name)

#         # Connect to the SQLite database
#         conn = sqlite3.connect('confidence_levels.db')

#         # Query the database for data of the provided entity
#         query = "SELECT * FROM Predictions WHERE Entity = ?"
#         result = pd.read_sql_query(query, conn, params=(entity_name,))

#         # Close the database connection
#         conn.close()

#         # Convert the result to JSON and return it
#         if not result.empty:
#             return jsonify(result.to_dict(orient='records'))
#         else:
#             return jsonify({'message': 'Entity not found'}), 404

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500


# @app.route('/get_mase_error', methods=['POST'])
# def get_mase_error():
#     try:
#         # Get the entity name from the POST request
#         entity_name = json.loads(request.data.decode("UTF-8"))["entity_name"]

#         print( entity_name)

#         # Connect to the SQLite database
#         conn = sqlite3.connect('mase__error.db')

#         # Query the database for data of the provided entity
#         query = "SELECT * FROM MASE_ERROR WHERE Entity = ?"
#         result = pd.read_sql_query(query, conn, params=(entity_name,))

#         # Close the database connection
#         conn.close()

#         # Convert the result to JSON and return it
#         if not result.empty:
#             return jsonify(result.to_dict(orient='records'))
#         else:
#             return jsonify({'message': 'Entity not found'}), 404

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500


# if __name__ == '__main__':
#     app.run(debug=True)











from flask import Flask, request, jsonify
import sqlite3
import pandas as pd
from html import escape

app = Flask(__name__)

@app.route('/get_predictions', methods=['POST'])
def get_predictions():
    try:
        # Get the entity name from the POST request
        entity_name = request.json.get('entity_name')

        print(entity_name)

        # Connect to the SQLite database
        conn = sqlite3.connect('renewable_predictions_test.db')

        # Query the database for predictions of the provided entity
        query = f"SELECT * FROM predictions WHERE Entity = ?"
        result = pd.read_sql_query(query, conn, params=(entity_name,))

        # Close the database connection
        conn.close()

        # Sanitize the result to prevent XSS
        sanitized_result = result.applymap(lambda x: escape(str(x)))

        # Converting the result to JSON and return it
        if not sanitized_result.empty:
            return jsonify(sanitized_result.to_dict(orient='records')), 200, {'Content-Type': 'application/json'}
        else:
            return jsonify({'message': 'Entity not found'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/get_confidence_level', methods=['POST'])
def get_confidence_level():
    try:
        entity_name = request.json.get('entity_name')

        if not entity_name:
            return jsonify({'error': 'Entity name not provided'}), 400

        print(f"Entity name: {entity_name}")

        conn = sqlite3.connect('confidence_levels.db')

        query = "SELECT * FROM Predictions WHERE Entity = ?"
        result = pd.read_sql_query(query, conn, params=(entity_name,))

        conn.close()

        if result.empty:
            return jsonify({'message': 'Entity not found'}), 404

        sanitized_result = result.apply(lambda x: x.map(lambda y: escape(str(y))))

        return jsonify(sanitized_result.to_dict(orient='records')), 200, {'Content-Type': 'application/json'}

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500
    
    

@app.route('/get_mase_error', methods=['POST'])
def get_mase_error():
    try:
        entity_name = request.json.get('entity_name')

        print(entity_name)

        conn = sqlite3.connect('mase__error.db')

        query = "SELECT * FROM MASE_ERROR WHERE Entity = ?"
        result = pd.read_sql_query(query, conn, params=(entity_name,))

        conn.close()

        sanitized_result = result.applymap(lambda x: escape(str(x)))

        if not sanitized_result.empty:
            return jsonify(sanitized_result.to_dict(orient='records')), 200, {'Content-Type': 'application/json'}
        else:
            return jsonify({'message': 'Entity not found'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
