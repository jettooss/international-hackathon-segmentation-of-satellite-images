FROM python:3.10-alpine

ENV PYTHONUNBUFFERED=1

# Install required system libraries including OpenBLAS
RUN apk update && apk add build-base libffi-dev python3-dev openblas-dev

# Install CFFI
RUN apk add py3-cffi

WORKDIR /app
COPY . /app

# Install Python packages
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install torch==1.12.0 torchvision==0.1.6 --extra-index-url https://download.pytorch.org/whl/cpu

