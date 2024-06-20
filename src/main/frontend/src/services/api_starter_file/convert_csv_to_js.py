from pathlib import Path
import csv
import json
import os

file_path = Path(__file__).with_name('Quotes.csv')
current_dir = os.path.dirname(__file__)
new_file_path = os.path.join(current_dir, "addQuotes.sql")
to_add_jsons = []

with file_path.open('r', newline='') as csvfile:
    with open(new_file_path, "w") as outfile:
        reader = csv.reader(csvfile, delimiter=';', quotechar='|')
        outfile.write('USE utiliSuite;\n')
        
        first = True
        for row in reader:
            if first:
                first = False
            else:
                outfile.write('INSERT INTO Quote (whoSaid, quote) VALUES ("' + row[1] + '", "' + row[0] + '");\n')


print('Done.')
