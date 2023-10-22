from flask import Blueprint, Response, jsonify
from typing import Tuple
from flask.views import MethodView
from datetime import datetime
from flask_cors import cross_origin
import shared.db.model as db_model
from shared.types.status import ErrorResponse
from flask_pydantic import validate
from shared.types.hospital import HospitalLoginRequest, HospitalLoginResponse
from shared.db.schema import HospitalSchema
from bson import ObjectId

hospital_bp = Blueprint("hospital", __name__)

class VerifyHospital(MethodView):
    @cross_origin(headers=["Content-Type", "Authorization"])
    @validate()
    def get(self, query : HospitalLoginRequest) -> Tuple[Response, int]:
        # print('asas')
        response, err = db_model.login_hospital(query.username, query.password)
        # print('asas')
        if err is not None:
            return jsonify(dict(ErrorResponse(err=err))), 404
        # print('asas')
        resp = HospitalLoginResponse(**response.dict(), success=True)
        return jsonify(dict(resp)), 200
    
hospital_bp.add_url_rule("/login", view_func=VerifyHospital.as_view("login"), methods=["GET"])