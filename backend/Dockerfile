FROM nvidia/cuda:12.1.0-runtime-ubi8

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive
ENV PYTHONUNBUFFERED=1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    python3-pip \
    libglib2.0-0

# If you need OpenCV, you can install it via pip (python3-opencv package might not be available)
# RUN pip install opencv-python-headless

# Install additional dependencies if needed
# RUN apt-get install -y <other-packages>

# Clean up APT when done
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . /app

# Upgrade pip and setuptools
RUN pip install --upgrade pip setuptools

# Install PyTorch
RUN pip install torch torchvision torchaudio -f https://download.pytorch.org/whl/cu111/torch_stable.html

# Install Python packages from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
