<template>
    <table>
        <tbody>
            <tr v-for="row in 10" v-bind:key="'row_'+row">
                <td v-for="col in 10" v-bind:key="'col_'+col" :ref="'_'+row+col"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Game",
        data(){
            return {
                ships: [
                    { "name": "Destructeur", "length": 1, "orientation": "h", "x": 3, "y": 2},
                    { "name": "Croiseur", "length": 3, "orientation": "h", "x": 6, "y": 6},
                    { "name": "Sous-marin", "length": 2, "orientation": "v", "x": 3, "y": 7}
                ]
            }
        },
        mounted() {
            this.placeAllShips()
        },
        methods:{
            placeAllShips(){
                this.ships.forEach((ship) => {
                    this.placeShip(ship)
                })
            },
            placeShip(ship){
                for(let i = 0; i < ship.length; i++){
                    let ref = '_';
                    if(ship.orientation === "h"){
                        ref += ship.y+""+(ship.x + i);

                    }
                    else{
                        ref += (ship.y + i)+""+ship.x;
                    }
                    this.$refs[ref][0].classList.add("red")
                }
            },
        }
    }
</script>

<style scoped>
    td{
        border:1px solid black;
        width: 2em;
        height: 2em;
    }
    .red{
        background-color: red;
    }
</style>