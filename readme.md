# INSTRUCTIONS

## HOW TO GENERATE A NEW KEY

1. Type the following command in the terminal:

```python
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

2. Select, copy, and paste the generated key into the appropriate location in settings.py.
