import logging

from fastapi import Depends, FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.logger import logger
from fastapi.security import HTTPBearer
from sqlalchemy.exc import IntegrityError
