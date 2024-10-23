<template>
    <div class="app-container container-fluid">
        <h1>Test</h1>
        <div class="row">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>slot_capacity</th>
                        <th>price_per_persion </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tour, i) in tourDetails" :key="i">
                        <td>{{ tour.tour_name }}</td>
                        <td>{{ tour.slot_capacity }}</td>
                        <td>{{ tour.starting_point }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import apiClient from "../../utils/apiClient";

export default {
    name: 'Tour',
    data() {
        return {
            tourDetails: []
        }
    },
    methods: {

        fetchData() {
            apiClient({ url: 'provider/tour-details', method: 'get' }).then(res => {
                this.tourDetails = res.data.tourDetails;
                console.log(this.tourDetails);

                setTimeout(() => {
                    this.loading = false;
                }, 200);
            }).catch((err) => {
                console.log(err);
            });
        },


    },
    mounted() {
        this.fetchData();
    }

}
</script>
