from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# app.register_blueprint(user_bp, url_prefix="/api/v1/user")
# app.register_blueprint(assets_bp, url_prefix="/api/v1/assets")
# app.register_blueprint(book_bp, url_prefix="/api/v1/book")
# app.register_blueprint(page_bp, url_prefix="/api/v1/page")

@app.errorhandler(413)
def page_not_found(error):
    print("=" * 60)
    print("in error handler")
    print(error)
    print(request.headers)
    print(f"content_length = {request.content_length}")
    print(f"max_size = {1024 * 1024 * 16}")
    print("=" * 60)
    return error


@app.route("/")
def is_server_running():
    return jsonify(dict(success="Backend for MedHelp is running!"))


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
