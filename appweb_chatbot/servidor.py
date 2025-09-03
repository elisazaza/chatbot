from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Diccionarios
diccionario_numeros = {
    "0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9,
    "cero": 0, "uno": 1, "dos":2, "tres":3, "cuatro":4, "cinco":5,
    "seis":6, "siete":7, "ocho":8, "nueve":9
}
diccionario_operaciones = {
    "+": 1, "mas":1, "-":2, "menos":2, "*":3, "por":3, "/":4, "entre":4
}

# Página principal
@app.route('/')
def index():
    return render_template('index.html')

# Procesar operación desde una frase
@app.route('/procesar', methods=['POST'])
def procesar():
    data = request.json
    frase = data.get('frase', '').lower().replace("?", " ")
    palabras = frase.split()

    numeros = []
    operacion = None

    for palabra in palabras:
        if palabra in diccionario_numeros:
            numeros.append(diccionario_numeros[palabra])
        elif palabra in diccionario_operaciones:
            operacion = diccionario_operaciones[palabra]

    if len(numeros) < 2 or operacion is None:
        return jsonify({"respuesta": "No entendí la operación :/"})

    n1, n2 = numeros[0], numeros[1]

    try:
        if operacion == 1:
            resultado = n1 + n2
        elif operacion == 2:
            resultado = n1 - n2
        elif operacion == 3:
            resultado = n1 * n2
        elif operacion == 4:
            resultado = n1 / n2
        else:
            return jsonify({"respuesta": "Operación no válida ❌"})
    except Exception as e:
        return jsonify({"respuesta": f"Error: {str(e)}"})

    return jsonify({"respuesta": f"{n1} {list(diccionario_operaciones.keys())[list(diccionario_operaciones.values()).index(operacion)]} {n2} = {resultado}"})

if __name__ == '__main__':
    app.run(debug=True)
