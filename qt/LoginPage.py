import sys
import traceback

import aiohttp
import requests
from PyQt5.QtWidgets import QApplication, QMainWindow, QWidget, QLabel, QLineEdit, QPushButton, QFrame, QVBoxLayout, \
    QScrollArea
from PyQt5.QtGui import QIcon, QFont
# from file_upload_app import FileUploadApp  # Import the FileUploadApp class
from PyQt5.QtCore import Qt

from FileUploadApp import *  # Import the FileUploadApp class

class LoginPage(QMainWindow):
    def __init__(self):
        super().__init__()
        self.init_ui()

    def init_ui(self):
        self.setWindowTitle("Название продукта")
        self.setGeometry(100, 100, 700, 500)
        self.setWindowIcon(QIcon('1675535441_top-fon-com-p-znaki-dlya-prezentatsii-bez-fona-85.png'))

        self.central_widget = QWidget(self)
        self.setCentralWidget(self.central_widget)

        # Left-side block for product description and usage instructions
        left_block = QFrame(self.central_widget)
        left_block.setGeometry(50, 30, 250, 400)
        left_block.setStyleSheet("background-color: #4CAF50; border-radius: 10px;")

        left_layout = QVBoxLayout(left_block)

        description_label = QLabel("Описание продукта\nЗдесь ваше красивое описание продукта.", left_block)
        description_label.setStyleSheet("color: white;")
        left_layout.addWidget(description_label)

        usage_label = QLabel("Как пользоваться\nИнструкции по использованию продукта.", left_block)
        usage_label.setStyleSheet("color: white;")
        left_layout.addWidget(usage_label)

        # Right-side block for login form
        right_block = QFrame(self.central_widget)
        right_block.setGeometry(320, 30, 350, 400)
        right_block.setStyleSheet("background-color: #E0E0E0; border-radius: 10px;")

        self.username_label = QLabel("Username:", right_block)
        self.username_label.setGeometry(20, 20, 100, 30)

        self.username_input = QLineEdit(right_block)
        self.username_input.setGeometry(130, 20, 200, 30)
        self.username_input.setStyleSheet("border: 2px solid #4CAF50; border-radius: 5px;")

        self.password_label = QLabel("Password:", right_block)
        self.password_label.setGeometry(20, 60, 100, 30)

        self.password_input = QLineEdit(right_block)
        self.password_input.setGeometry(130, 60, 200, 30)
        self.password_input.setEchoMode(QLineEdit.Password)
        self.password_input.setStyleSheet("border: 2px solid #4CAF50; border-radius: 5px;")

        self.login_button = QPushButton("Login", right_block)
        self.login_button.setGeometry(100, 110, 180, 30)
        self.login_button.setStyleSheet(
            "background-color: #4CAF50; color: white; font-weight: bold; border-radius: 5px;")

        self.login_button.clicked.connect(self.login)
    def navigate_to_file_upload_app(self):
        self.file_upload_app = FileUploadApp()
        self.file_upload_app.show()
        self.close()

    def login(self):
        username = self.username_input.text()
        password = self.password_input.text()

        # Use asyncio to run the asynchronous method
        import asyncio
        asyncio.run(self.authenticate(username, password))

    async def authenticate(self, username, password):
        auth_url = "http://127.0.0.1:8000/api/api-token-auth/"

        async with aiohttp.ClientSession() as session:
            async with session.post(auth_url, data={"username": username, "password": password}) as response:
                if response.status == 200:
                    print("Login successful!")  # Debug print
                    self.navigate_to_file_upload_app()  # Navigate to the file upload app
                else:
                    print("Login failed. Please try again.")  # Debug print

def main():
    try:
        app = QApplication(sys.argv)
        window = LoginPage()
        window.show()
        sys.exit(app.exec_())
    except Exception as e:
        print(f"Unhandled exception: {e}")
        traceback.print_exc()
        raise

if __name__ == "__main__":
    main()

