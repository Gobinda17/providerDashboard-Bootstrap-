<template>
    <div class="card card-flush">
        <div class="card-header pt-7">
            <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold text-gray-800">Tour Details</span>
                <span class="text-gray-400 mt-1 fw-semibold fs-6">Updated 37 minutes ago</span>
            </h3>
        </div>
        <div class="card-body pt-6">
            <div class="table-responsive">
                <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
                    <thead>
                        <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
                            <th class="p-0 pb-3 min-w-175px text-start">TOUR NAME</th>
                            <th class="p-0 pb-3 min-w-100px text-end">TOUR TYPE</th>
                            <th class="p-0 pb-3 min-w-100px text-end">CAPACITY</th>
                            <th class="p-0 pb-3 min-w-100px text-end">PRICE</th>
                            <th class="p-0 pb-3 min-w-100px text-end">BOOKINGS</th>
                            <th class="p-0 pb-3 min-w-175px text-end pe-12">STATUS</th>
                            <th class="p-0 pb-3 w-50px text-end">VIEW</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(row, index) in tour" :key="index">
                            <tr>
                                <td>
                                    <span class="text-gray-600 fw-bold fs-6">{{ row.name }}</span>
                                </td>
                                <td class="text-end pe-0">
                                    <span class="text-gray-600 fw-bold fs-6">{{ row.type }}</span>
                                </td>
                                <td class="text-end pe-0">
                                    <span class="text-gray-600 fw-bold fs-6">{{ row.capacity }}</span>
                                </td>
                                <td class="text-end pe-0">
                                    <span class="text-gray-600 fw-bold fs-6">{{ row.price }}</span>
                                </td>
                                <td class="text-end pe-0">
                                    <span class="text-gray-600 fw-bold fs-6">{{ row.bookings }}</span>
                                </td>
                                <td class="text-end pe-0">
                                    <span class="text-gray-600 fw-bold fs-6">{{ row.status }}</span>
                                </td>
                                <td class="text-end pe-0">
                                    <span class="text-dark-600 fw-bold fs-6">
                                        <a href="#"
                                            class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                            View
                                        </a>
                                    </span>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Table_Widget",
    data() {
        return {
            tour: [{
                name: "ABCD",
                type: "Religious",
                capacity: 12,
                price: 5000,
                bookings: 100,
                status: "Active",
            },],
        };
    }
}
</script>