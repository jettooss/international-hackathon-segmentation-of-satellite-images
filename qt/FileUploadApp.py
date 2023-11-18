import os
from PyQt5.QtWidgets import QMainWindow, QPushButton, QLabel, QFileDialog

class FileUploadApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.init_ui()

    def init_ui(self):
        self.setWindowTitle("Загрузка файла")
        self.setGeometry(100, 100, 400, 200)

        self.upload_button = QPushButton("Выбрать файл и загрузить", self)
        self.upload_button.setGeometry(50, 50, 300, 30)
        self.upload_button.clicked.connect(self.upload_file)

        self.status_label = QLabel("", self)
        self.status_label.setGeometry(50, 100, 300, 30)

    def upload_file(self):
        options = QFileDialog.Options()
        file_path, _ = QFileDialog.getOpenFileName(self, "Выберите файл для загрузки", "", "All Files (*)", options=options)

        if file_path:
            # Здесь вы можете добавить код для копирования файла в папку проекта
            project_folder = os.path.dirname(__file__)
            target_path = os.path.join(project_folder, os.path.basename(file_path))

            try:
                os.rename(file_path, target_path)  # Перемещаем файл в папку проекта
                self.status_label.setText("Файл успешно загружен!")
            except Exception as e:
                self.status_label.setText(f"Ошибка: {str(e)}")

    # def navigate_to_file_upload_app(self):
    #     self.file_upload_app = FileUploadApp()
    #     self.file_upload_app.show()