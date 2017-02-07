#!/usr/bin/env python3.6

from sanic import Sanic
from sanic.response import json, HTTPResponse
import asyncpg
# import base64
import aiofiles

# # For development only!
# from aoiklivereload import LiveReloader
# reloader = LiveReloader()
# reloader.start_watcher_thread()

app = Sanic()

# app.static('/static', '/mnt/main/Pictures')


conn = None

async def connect_to_db(server, loop):
    global conn
    conn = await asyncpg.connect(database='pictures', host='localhost', port=5439, user='quasar', password='theeyeofra')
    print("DB connection successful")

async def disconnect_from_db(server, loop):
    await conn.close()
    print("DB disconnection successful")



@app.route("/")
async def test(request):
    values = await conn.fetch("select id,filename from pictures where id >  $1 limit 100", 10)
    return json(values)


@app.route("/img/<id:int>")
async def image_from_id(request, id):
    path = await conn.fetchval("select path from pictures where id = $1", id)
    async with aiofiles.open(path, 'rb') as f:
        data = await f.read()

    return HTTPResponse(status=200,
                        headers=None,
                        content_type="image/jpeg",
                        body_bytes=data)

# get thumbnail - need to extract it from exif info or generate it, likely


@app.route("/tags/<id:int>")
async def get_tags(request, id):
    pass

@app.route("/add_tag/<id:int>")
async def add_tag(request, id):
    pass

@app.route("/remove_tag/<id:int>")
async def remove_tag(request, id):
    pass


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True, before_start=connect_to_db, after_stop=disconnect_from_db)
