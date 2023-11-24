FROM python:3.9

# Install NVIDIA CUDA
RUN apt-get update && apt-get install -y --no-install-recommends \
    gnupg2 curl ca-certificates && \
    curl -fsSL https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/3bf863cc.pub | apt-key add - && \
    echo "deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/ /" > /etc/apt/sources.list.d/cuda.list && \
    apt-get purge --autoremove -y curl && \
    rm -rf /var/lib/apt/lists/*

ENV CUDA_VERSION 12.1.0
RUN apt-get update && apt-get install -y --no-install-recommends \
    cuda-runtime-$CUDA_VERSION

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
