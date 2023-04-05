<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <appointments-table />
      </div>
    </div>
  </div>
</template>

<script>
import AppointmentsTable from "./components/AppointmentsTable";

export default {
  name: "appointments",
  components: {
    AppointmentsTable,
  },
};
</script>
