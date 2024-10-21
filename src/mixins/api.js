import domain from "./domain";

export default {
    methods: {
        // --------------------- GET PRODUCTS BY SORT = DESC ----------------
        getProductsBySortDesc: async function() {
            let response = await this.axios.get(
                domain.APP_DOMAIN + "products?sort=desc",
                domain.APP_HEADER
            );
            return response.data;
        },
        // --------------------- GET PRODUCTS BY SPECIFIC CATEGORY ----------------
        getProductsByCategory: async function(category) {
            let response = await this.axios.get(
                domain.APP_DOMAIN + "products/category/" + category,
                domain.APP_HEADER
            );
            return response.data;
        }
    }
}