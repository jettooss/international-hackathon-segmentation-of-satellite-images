from fuzzywuzzy import process

def fuzzy_match(query, options: list, limit=10) -> list:
    """
    Получение похожего слова/запроса
    """
    matches = process.extract(query, options, limit=limit)

    return matches