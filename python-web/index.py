from flask import Flask, render_template
app=Flask(__name__)
@app.route('/')
def home():
    return render_template('home.html')
#paginas about
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/nosotros')
def nosotros():
    return render_template('nosotros.html')
@app.route('/contacto')
def contacto():
    return render_template('contacto.html')
@app.route('/carros')
def carros():
    return render_template('carros.html')

@app.route('/motos')
def motos():
    return render_template('motos.html')

@app.route('/carros_usados')
def carros_usados():
    return render_template('carros_usados.html')

@app.route('/motos_nuevas')
def motos_nuevas():
    return render_template('motos_nuevas.html')

if __name__=='__name__':
    app.run()
