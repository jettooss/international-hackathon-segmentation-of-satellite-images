FROM nvidia/cuda:11.4.0-base-ubuntu20.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive
ENV PYTHONUNBUFFERED=1

# Install system dependencies
RUN apt-get update && \
    apt-get install -y \
        git \
        python3-pip \
        python3-dev \
        python3-opencv \
        libglib2.0-0 \


# Install required system libraries including OpenBLAS
RUN apk update && apk add build-base libffi-dev python3-dev openblas-dev

# Install CFFI
RUN apk add py3-cffi

WORKDIR /app
COPY . /app

# Install Python packages
RUN pip install --upgrade setuptools pip
RUN pip install torch torchvision torchaudio -f https://download.pytorch.org/whl/cu111/torch_stable.html
RUN pip install --no-cache-dir -r requirements.txt

