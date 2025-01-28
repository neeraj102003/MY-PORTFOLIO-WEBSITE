import os

class Config:
    # Secret key to secure sessions and cookies
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key'

    # Database URI (Support for both environment variable or default to SQLite)
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///site.db'

    # Disables the Flask-SQLAlchemy event system to reduce overhead
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # For enabling/disabling debug mode based on environment variable
    FLASK_ENV = os.environ.get('FLASK_ENV') or 'development'  # 'development' or 'production'

    # For mail setup (this can be used for notifications, etc. in the future)
    MAIL_SERVER = os.environ.get('MAIL_SERVER') or 'smtp.googlemail.com'  # Default mail server
    MAIL_PORT = int(os.environ.get('MAIL_PORT') or 587)  # SMTP port
    MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS') or True
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')  # Your email address
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')  # Your email password
    MAIL_DEFAULT_SENDER = os.environ.get('MAIL_DEFAULT_SENDER') or 'noreply@example.com'

    # Enable/Disable CSRF protection
    CSRF_ENABLED = True

    # Max size of uploaded files (e.g., for file uploads)
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16MB

    # Other configuration options for deployment or testing
    # Add your additional configurations as needed
