# Python Examples for Portfolio

import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime
import json

class DataAnalyzer:
    """Simple data analysis class"""
    
    def __init__(self, data=None):
        self.data = data if data is not None else []
    
    def add_data(self, value):
        """Add a data point"""
        self.data.append(value)
    
    def get_average(self):
        """Calculate average of data"""
        if not self.data:
            return 0
        return sum(self.data) / len(self.data)
    
    def get_max(self):
        """Get maximum value"""
        return max(self.data) if self.data else None
    
    def get_min(self):
        """Get minimum value"""
        return min(self.data) if self.data else None
    
    def get_summary(self):
        """Get data summary"""
        if not self.data:
            return "No data available"
        
        return {
            'count': len(self.data),
            'average': self.get_average(),
            'maximum': self.get_max(),
            'minimum': self.get_min(),
            'sum': sum(self.data)
        }

# Example usage
def main():
    # Create analyzer instance
    analyzer = DataAnalyzer([10, 20, 30, 40, 50])
    
    # Add more data
    analyzer.add_data(60)
    analyzer.add_data(70)
    
    # Get summary
    summary = analyzer.get_summary()
    print("Data Summary:", json.dumps(summary, indent=2))

# Web scraper example
import requests
from bs4 import BeautifulSoup

class SimpleWebScraper:
    """Basic web scraper"""
    
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
    
    def get_page_title(self, url):
        """Get page title from URL"""
        try:
            response = self.session.get(url)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            title = soup.find('title')
            
            return title.text.strip() if title else "No title found"
        
        except requests.RequestException as e:
            return f"Error: {str(e)}"
    
    def get_all_links(self, url):
        """Get all links from a webpage"""
        try:
            response = self.session.get(url)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            links = soup.find_all('a', href=True)
            
            return [{'text': link.text.strip(), 'url': link['href']} 
                   for link in links if link.text.strip()]
        
        except requests.RequestException as e:
            return f"Error: {str(e)}"

# File handler example
class FileHandler:
    """Simple file operations"""
    
    @staticmethod
    def read_file(filename):
        """Read file content"""
        try:
            with open(filename, 'r', encoding='utf-8') as file:
                return file.read()
        except FileNotFoundError:
            return "File not found"
        except Exception as e:
            return f"Error reading file: {str(e)}"
    
    @staticmethod
    def write_file(filename, content):
        """Write content to file"""
        try:
            with open(filename, 'w', encoding='utf-8') as file:
                file.write(content)
            return "File written successfully"
        except Exception as e:
            return f"Error writing file: {str(e)}"
    
    @staticmethod
    def append_to_file(filename, content):
        """Append content to file"""
        try:
            with open(filename, 'a', encoding='utf-8') as file:
                file.write(content)
            return "Content appended successfully"
        except Exception as e:
            return f"Error appending to file: {str(e)}"

# API client example
class APIClient:
    """Simple API client"""
    
    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()
    
    def get(self, endpoint, params=None):
        """GET request"""
        try:
            url = f"{self.base_url}/{endpoint}"
            response = self.session.get(url, params=params)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            return {'error': str(e)}
    
    def post(self, endpoint, data=None):
        """POST request"""
        try:
            url = f"{self.base_url}/{endpoint}"
            response = self.session.post(url, json=data)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            return {'error': str(e)}

# Example usage
if __name__ == "__main__":
    # Run data analyzer example
    main()
    
    # Example with file handler
    handler = FileHandler()
    content = "Hello, this is a test file!"
    print(handler.write_file("test.txt", content))
    print(handler.read_file("test.txt"))
    
    # Example with API client
    # api_client = APIClient("https://jsonplaceholder.typicode.com")
    # posts = api_client.get("posts", params={'_limit': 5})
    # print("API Response:", posts)