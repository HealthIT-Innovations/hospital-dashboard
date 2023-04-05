<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-lg-6 col-7">
          <h6>Appointments</h6>
          <p class="text-sm mb-0">
            <i class="fa fa-check text-info" aria-hidden="true"></i>
            <span class="font-weight-bold ms-1">4 scheduled</span> today
          </p>
        </div>
        <div class="col-6 text-end">
          <soft-button color="success" size="sm" variant="outline"
            >Add Appointmentl</soft-button
          >
        </div>
      </div>
    </div>
    <div class="card-body px-4 pb-8">
      <div class="table-responsive">
        <el-table :data="filterUsers" style="width: 100%" height="100%">
          <el-table-column label="Name" prop="name" />
          <el-table-column label="Surname" prop="surname" />
          <el-table-column label="Phone" prop="phone" />
          <el-table-column label="Region" prop="region" />
          <el-table-column label="Date" prop="date" />
          <el-table-column label="Time" prop="time" />
          <el-table-column align="right">
            <template #header>
              <el-input
                v-model="search"
                size="small"
                placeholder="Type to search"
              />
            </template>
            <template #default="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import PatientsData from "@/data/patients.json";
import SoftButton from "@/components/SoftButton.vue";

export default {
  name: "appointments-table",
  data() {
    return {
      search: "",
      patientsData: PatientsData
    };
  },
  components: {
    SoftButton,
  },
  computed: {
    filterUsers() {
      let filterUsers = [...this.patientsData];

      if (this.search) {
        filterUsers = filterUsers.filter((user) => {
          const searchRegex = new RegExp(`${this.search.trim()}`, "i");
          const searchResult = user.name.match(searchRegex);
          return !!searchResult;
        });
      }
      return filterUsers;
    },
  },
  mounted() {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>


