<template>
    <div>
        <v-card-title class="text-h5 d-flex justify-center align-center font-weight-bold">
            {{productItm.category}}
        </v-card-title>
    
        <div class="d-flex justify-center">
            <v-avatar
                class="ma-3"
                size="150"
                tile
            >
                <v-img :src="productItm.image"></v-img>
            </v-avatar>
        </div>
    
        <v-card :style="[getCompBgStyle(productItm.category), { marginTop: '25px', borderRadius: '20px', height: '138px' }]">
            <v-card-subtitle class="text-center">
                <div class="text-h6 d-flex justify-center align-center font-weight-bold" style="color: #0E42FD;">
                    RS. {{ productItm.price }}
                </div>
                <div>
                    {{ productItm.title }}
                </div>
            </v-card-subtitle>
        </v-card>

    </div>
</template>

<script>
    import config from '../data/Config_Web_Headings'
    export default {
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                productItm: {},
                object: config
            };
        },
        mounted() {
            this.productItm = this.product;
        },
        methods: {
            getCompBgStyle(val) {
                return {
                background:
                    val === "men's clothing"
                    ? this.object.Category_option_Men.bg_color
                    : val === "women's clothing"
                    ? this.object.Category_option_Women.bg_color
                    : ''
                };
            }
        }
    }
</script>