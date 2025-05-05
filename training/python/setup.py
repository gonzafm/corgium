from setuptools import setup, find_packages
setup(
    name="training",
    version="0.1",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    entry_points={
        "console_scripts": [
            "training=main:main",
        ],
    },
    author="Gonzalo Medina",
    author_email="gonzafm@gmail.com"  
)