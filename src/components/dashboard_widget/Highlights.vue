<template>
    <div class="card card-flush">
        <div class="card-header pt-7">
            <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold text-gray-800">Bookings Highlight</span>
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
                        <div class="d-flex align-items-center mb-2 gap-2">
                            <span class="fs-1 fw-semibold text-gray-400 me-1 mt-n1">₹</span>
                            <span class="fs-3x fw-bold text-gray-800 me- lh-1 ls-n2">18,89</span>
                            <span class="badge badge-light-success fs-base">
                                <i class="ri-arrow-up-line fs-5 text-success ms-n1"></i>
                                4%
                            </span>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" :class="view === 'month' ? ' active show' : ''" id="#month_tab"
                    role="tabpanel">
                    <div class="mb-5">
                        <div class="d-flex align-items-center mb-2 gap-2">
                            <span class="fs-1 fw-semibold text-gray-400 me-1 mt-n1">₹</span>
                            <span class="fs-3x fw-bold text-gray-800 me- lh-1 ls-n2">25,00</span>
                            <span class="badge badge-light-success fs-base">
                                <i class="ri-arrow-up-line fs-5 text-success ms-n1"></i>
                                8%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Bookings',
    data() {
        return {
            view: 'week',
        };
    },
    methods: {
        changeView(value) {
            this.view = value;
        }
    }
}
</script>