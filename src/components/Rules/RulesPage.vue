<template>
    <div class="RulesPage">
        <div class="container">
            <div class="rules-div">
                <div class="section rounded text-white">
                    <div class="header">
                        <div class="title">
                            <h1>Bataille Navale</h1>
                        </div>
                    </div>
                    <div class="body">
                        <div> 
                            <p>Alors soldat, vous pensez que vous pouvez aller à la guerre et défier à n'importe qui ? On va voir !</p>
                            <p>Mais avant que vous commenciez à faire n'importe quoi, il faut connaitre les différents bateaux que vous trouverez et que vous pourrez utiliser pour détruire votre ennemi.</p>
                        </div>
                        <div class="title">
                            <div>
                                <h2>Bateaux à utiliser</h2>
                            </div>
                            <div>
                                <ul class="list-navettes">
                                    <li>Transporteur, qui est composé de cinq cases</li>
                                    <li>Cuirassé, qui est composé de quatre cases</li>
                                    <li>Croiseur, qui est composé de trois cases</li>
                                    <li>Sous-marin, qui est composé de deux cases</li>
                                    <li>Destructeur, qui est composé d'une case</li>
                                </ul>
                            </div>
                            <div class="images">

                            </div>
                        </div>
                        <div class="instructions title">
                            <h1>Instructions pour jouer</h1>
                            <div class="instruction">
                                <div class="instruction-title">
                                    <h4>1. Commencer une partie</h4>
                                </div>
                                <div class="instruccion-body">
                                    <p>Avec l'application mobile que vous pouvez télécharger dans le magasin d'applications de votre système d'exploitation, scannez le code QR qui apparaîtra quand vous cliquerez sur le bouton "Jouer !" dans l'accueil.</p>
                                </div>
                            </div>
                            <div class="instruction">
                                <div class="instruction-title">
                                    <h4>2. Placer bateaux dans les cases</h4>
                                </div>
                                <div class="instruccion-body">
                                    <p>Lorsque les deux joueurs sont connectés à la partie vous aurez accès à la liste des bateaux. Sur l'application mobile, placez-les où vous voulez mais n'oubliez pas que vous ne pouvez pas mettre deux bateaux dans une même case ni l'un à côté de l'autre.</p>
                                </div>
                            </div>
                            <div class="instruction">
                                <div class="instruction-title">
                                    <h4>3. Jouer</h4>
                                </div>
                                <div class="instruccion-body">
                                    <p>Les deux joueurs vont pouvoir attaquer chacun leur tour, tant qu'un joueur attaque, l'autre doit attendre son tour.</p>
                                </div>
                            </div>
                        </div>
                        <div class="rules">
                            <h1>Règles du jeu</h1>
                            <div class="regle">
                                <div class="regle-title">
                                    <h4>1. Disposition des tours</h4>
                                </div>
                                <div class="regle-body">
                                    <p>Les joueurs ne peuvent attaquer qu'une fois par tour. Si un des joueurs touche l'autre, il peut rejouer.</p>
                                </div>
                            </div>
                            <div class="regle">
                                <div class="regle-title">
                                    <h4>2. Le gagneur</h4>
                                </div>
                                <div class="regle-body">
                                    <p>Le joueur qui arrive à toucher toutes les cases occuppées par les bateaux de l'autre sera le gagneur du jeu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
    export default {
        name: "RulesPage",
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss">
    body {
        background-image: url("../../assets/background_home.jpg");
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
    }

    .content {
        margin-top: 20vh;
        text-align: right;
        padding-right: 10vw;
        color: white;

        div {
            display: inline-block;
            text-align: center;
        }
    }

    .rules-div {
        padding: 30px;
    }

    .title {
        border-bottom: 1px solid white;
        margin-bottom: 10px;
    }

    .list-navettes {
        display: flex;
        flex-flow: column;
    }

    .list-navettes li {
        list-style: none;
        text-align: left;
    }

    .section {
        background-color: rgba(0, 0, 0, .8);
        margin-top: 100px;
        padding: 20px;
        margin-bottom: 100px;
    }

    @media (max-width: 980px) {
        .content {
            padding-right: 0px;

            div {
                display: block;
                text-align: center;
            }
        }
    }
</style>