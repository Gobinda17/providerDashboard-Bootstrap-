<template>
    <div class="card card-flush h-100">
        <div class="card-header pt-7">
            <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold text-gray-800">Bookings Details</span>
                <span class="text-gray-400 mt-1 fw-semibold fs-6">Updated 37 minutes ago</span>
            </h3>

            <div class="card-toolbar">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1"
                            :class="view === 'month' ? 'active' : ''" data-bs-toggle="tab" id="week_toggle"
                            href="#week_tab" @click="changeView('month')">Month</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1"
                            :class="view === 'week' ? 'active' : ''" data-bs-toggle="tab" id="month_toggle"
                            href="#month_tab" @click="changeView('week')">Week</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-body pt-6">
            <div class="tab-content">
                <div class="tab-pane fade" :class="view === 'week' ? ' active show' : ''" id="#week_tab"
                    role="tabpanel">
                    <div class="mb-5">
                        <div class="table-responsive">
                            <DataTable width="100%" ajax="bookings" id="dataTableWeek" class="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                <thead>
                                    <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
                                        <th class="p-0 pb-3 min-w-80px text-start">Booking ID</th>
                                        <th class="p-0 pb-3 min-w-150px text-end">Customer Name</th>
                                        <th class="p-0 pb-3 min-w-150px text-end">Package/Tour Name</th>
                                        <th class="p-0 pb-3 min-w-100px text-end">Tour/Activity Date</th>
                                        <th class="p-0 pb-3 min-w-100px text-end">Number of Participants</th>
                                        <th class="p-0 pb-3 min-w-175px text-end pe-12">Total Price</th>
                                        <th class="p-0 pb-3 min-w-175px text-end pe-12">Payment Status</th>
                                        <th class="p-0 pb-3 min-w-175px text-end pe-12">Booking Status</th>
                                        <th class="p-0 pb-3 min-w-175px text-end pe-12">Contact Information</th>
                                        <th class="p-0 pb-3 w-50px text-end">VIEW</th>
                                    </tr>
                                </thead>
                                <!-- <tbody>
                                    <template v-for="(row, index) in bookings" :key="index">
                                        <tr>
                                            <td>
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.id }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.name }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.tour }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.t_date }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.b_date }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.capacity }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.t_price }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6 badge text-bg-success">
                                                    {{ row.p_status }}
                                                </span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6 badge text-bg-danger">
                                                    {{ row.b_status }}
                                                </span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">
                                                    {{ row.contact }}
                                                </span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-dark-600 fw-bold fs-6">
                                                    <a href="#"
                                                        class="btn btn-sm btn-icon btn-bg-dark btn-active-color-primary w-30px h-30px">
                                                        View
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody> -->
                            </DataTable>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" :class="view === 'month' ? ' active show' : ''" id="#month_tab"
                    role="tabpanel">
                    <div class="mb-5">
                        <div class="table-responsive">
                            <table id="dataTableMonth" class="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                <thead>
                                    <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
                                        <th class="p-0 pb-3 min-w-80px text-start">Booking ID</th>
                                        <th class="p-0 pb-3 min-w-150px text-end">Customer Name</th>
                                        <th class="p-0 pb-3 min-w-150px text-end">Package/Tour Name</th>
                                        <th class="p-0 pb-3 min-w-100px text-end">Tour/Activity Date</th>
                                        <th class="p-0 pb-3 min-w-100px text-end">Number of Participants</th>
                                        <th class="p-0 pb-3 min-w-175px text-end pe-12">Total Price</th>
                                        <th class="p-0 pb-3 min-w-175px text-end pe-12">Payment Status</th>
                                        <th class="p-0 pb-3 min-w-175px text-end pe-12">Booking Status</th>
                                        <th class="p-0 pb-3 min-w-175px text-end pe-12">Contact Information</th>
                                        <th class="p-0 pb-3 w-50px text-end">VIEW</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(row, index) in bookings" :key="index">
                                        <tr>
                                            <td>
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.id }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.name }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.tour }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.t_date }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.b_date }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.capacity }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">{{ row.t_price }}</span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6 badge text-bg-success">
                                                    {{ row.p_status }}
                                                </span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6 badge text-bg-danger">
                                                    {{ row.b_status }}
                                                </span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-gray-600 fw-bold fs-6">
                                                    {{ row.contact }}
                                                </span>
                                            </td>
                                            <td class="text-end pe-0">
                                                <span class="text-dark-600 fw-bold fs-6">
                                                    <a href="#"
                                                        class="btn btn-sm btn-icon btn-bg-dark btn-active-color-primary w-30px h-30px">
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
            </div>
        </div>
    </div>
</template>
<script>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

export default {
    name: 'TableDetails',
    data() {
        return {
            view: 'week',
            bookings: [{
                id: "ASDXX-122-2321",
                name: "ABCD",
                tour: "QWERTY",
                t_date: "XX-XX-XXXX",
                b_date: "XX-XX-XXXX",
                capacity: 12,
                t_price: 5000,
                p_status: "Active",
                b_status: "None",
                contact: "8876696720",
            },],
        };
    },
    methods: {
        changeView(value) {
            this.view = value;
        },
        fetchData() {
            // $("#dataTableWeek").DataTable({
            //     pageLength: 10,
            //     ordering: false,
            //     lengthChange: false,
            //     searching: true,
            //     info: false,
            //     bDestroy: true
            // });
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>
<style scoped>
@import 'bootstrap';
@import 'datatables.net-bs5';
</style>