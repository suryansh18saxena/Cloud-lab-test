def recursive_merge(a, b):
    result = a.copy()

    for key, value in b.items():
        if key in result and isinstance(result[key], dict) and isinstance(value, dict):
            # Recursively merge nested dictionaries
            result[key] = recursive_merge(result[key], value)
        else:
            # b takes precedence
            result[key] = value

    return result


# Example
a = {
    "name": "Alice",
    "settings": {
        "theme": "dark",
        "notifications": True
    }
}

b = {
    "age": 25,
    "settings": {
        "theme": "light",
        "language": "English"
    }
}

merged = recursive_merge(a, b)

print(merged)

hello 

kaise hai aapp 