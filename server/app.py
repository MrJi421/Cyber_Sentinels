import google.generativeai as genai

# Configure the API key
genai.configure(api_key="API_KEY")

# Create a model instance (Use model_name instead of model)
model = genai.GenerativeModel(model_name="gemini-1.5-flash")

# Generate response
response = model.generate_content("Read this url report and provide a summary, why is it safe and if not explain that too? report link:")

# Print output
print(response.text)
