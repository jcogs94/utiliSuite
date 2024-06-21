from pathlib import Path
import csv
import os

# defines absolute path of used csv file
file_path = Path(__file__).with_name('Quotes.csv')

# defines the current directory of the file currently being run
# this is used for reference in the output file
current_dir = os.path.dirname(__file__)

# defines the path for the new output file
new_file_path = os.path.join(current_dir, "addQuotes.sql")

# opens csv file as a "read-only"
with file_path.open('r', newline='') as csvfile:
    # opens the "created/output" file as a "write"
    with open(new_file_path, "w") as outfile:
        # using the included library in python for csv, reads the csv file
        # line by line and separates the values out by the delimiter (in this case
        # the file uses ';'). Each line outputs an array of strings, with each
        # separate value being a separate string
        reader = csv.reader(csvfile, delimiter=';', quotechar='|')
        
        # tells mysql to USE the utiliSuite db
        outfile.write('USE utiliSuite;\n')
        first = True # used for ommitting the first line in the csv output

        # loops through each line (written as "row") of the csv output
        for row in reader:
            # if it's the first line, only change first line to false,
            # else, writes the sql command to add that value to the db
            if first:
                first = False
            else:
                outfile.write('INSERT INTO quote (author, quote) VALUES ("' + row[1] + '", "' + row[0] + '");\n')


print('Done.')
