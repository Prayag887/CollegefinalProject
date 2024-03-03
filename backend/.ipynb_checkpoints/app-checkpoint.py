from flask import Flask, request, jsonify
import sqlite3
import pandas as pd
import json

app = Flask(__name__)

@app.route('/get_predictions', methods=['POST'])
def get_predictions():

    try:
        # Get the entity name from the POST request
        entity_name = json.loads(request.data.decode("UTF-8"))["entity_name"]

        print(entity_name)

        # Connect to the SQLite database
        conn = sqlite3.connect('renewable_predictions_test.db')

        # Query the database for predictions of the provided entity
        query = f"SELECT * FROM predictions WHERE Entity = ?"
        result = pd.read_sql_query(query, conn, params=(entity_name,))

        # Close the database connection
        conn.close()

        # Convert the result to JSON and return it
        if not result.empty:
            return jsonify(result.to_dict(orient='records'))
        else:
            return jsonify({'message': 'Entity not found'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
