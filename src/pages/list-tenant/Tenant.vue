<template>
  <div class="allTenant row">
    <div class="col-10">
      <div class="description">
        <span style="width: auto; background-color: #C6FCEC; padding: 5px;"> {{ data.name }} </span>
        <button
          v-if="data.id"
          class="btn btn-sm btn-outline-primary"
          @click="openPerfil()"
        >
          <i class="fa fa-external-link-alt"></i>
          view contract
        </button>
        <!--button @click="remover()" class="btn btn-sm btn-outline-primary">
          <i class="fa fa-trash-alt"></i>
        </button-->
      </div>
      <small>Phone: {{ data.phone }}</small><br>
      <small>Contract: {{ data.contract }} month</small><br>
      <small>E-mail: {{ data.email }}</small><br>
      <small>APT: {{ data.apt }} </small><br>
      <small>Value: {{ data.apt }} </small><br>

      <small v-date-format="data.createdAt"></small>
    </div>
  </div>
</template>

<script>
export default {
  name: "allTenant",
  props: {
    data: { type: Object, required: true },
  },
  methods: {
    openPerfil() {
      window.open(this.data.photo, "_blank");
    },
    getData() {
      const ref = this.$firebase.database().ref(`${window.uid}`);

      ref("value", (data) => {
        const values = data.val();
        this.register = Object.keys(values).map((i) => values[i]);
      });

    },
    setActiveMonth(month = null) {
      this.activeMonth =
        month || this.groupedMonths[this.groupedMonths.length - 1];
    },

    },
  };
  
</script>

<style scoped>
.allTenant {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightblue;
}
.description {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
