FROM nvidia/cuda:12.1.0-runtime-ubi8

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Install system dependencies
RUN yum update -y && yum install -y \
    git \
    python3-pip \
    glib2

# Install OpenCV via pip if needed
# RUN pip install opencv-python-headless

# Clean up YUM when done
RUN yum clean all

WORKDIR /app
COPY . /app

# Upgrade pip and setuptools
RUN pip install --upgrade pip setuptools

# Install PyTorch
RUN pip install torch torchvision torchaudio -f https://download.pytorch.org/whl/cu111/torch_stable.html

# Install Python packages from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
