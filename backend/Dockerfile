FROM nvidia/cuda:12.1.0-runtime-ubi8

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Install development tools and libraries needed for building Python
RUN yum update -y && yum groupinstall -y "Development Tools" && \
    yum install -y \
    openssl-devel \
    bzip2-devel \
    libffi-devel \
    wget

# Download and install Python 3.9
RUN cd /tmp && \
    wget https://www.python.org/ftp/python/3.9.0/Python-3.9.0.tgz && \
    tar xzf Python-3.9.0.tgz && \
    cd Python-3.9.0 && \
    ./configure --enable-optimizations && \
    make altinstall && \
    rm /tmp/Python-3.9.0.tgz

# Symlink python3 to python3.9
RUN ln -s /usr/local/bin/python3.9 /usr/local/bin/python3 && \
    ln -s /usr/local/bin/pip3.9 /usr/local/bin/pip

# Install OpenCV if needed
# RUN pip install opencv-python-headless

WORKDIR /app
COPY . /app

# Upgrade pip and setuptools
RUN pip install --upgrade pip setuptools

# Install PyTorch
RUN pip install torch torchvision torchaudio -f https://download.pytorch.org/whl/cu111/torch_stable.html

# Install Python packages from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
