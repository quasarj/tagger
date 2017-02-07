#!/usr/bin/env python3

import psycopg2

conn = psycopg2.connect("dbname=pictures host=localhost port=5439 user=quasar password=theeyeofra")
cur = conn.cursor()

cur.execute("select path from pictures limit 10")
for path, in cur:
    print(path)


conn.close()
