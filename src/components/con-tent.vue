<template>
	<div class="uk-table-small">
		<table class="uk-table uk-table-hover">
			<thead>
				<tr>
					<th>id</th>
					<th>Customer Name</th>
					<th>Project Name</th>
					<th>PO Date</th>
					<th>PO Known Date</th>
					<th>Initial HO</th>
					<th>Approval HO</th>
					<th>Remark</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="handover in handovers">
					<td>{{handover.id}}</td>
					<td>{{handover.customer_name}}</td>
					<td>{{handover.project_name}}</td>
					<td>{{handover.po_date}}</td>
					<td>{{handover.po_known_date}}</td>
					<td>{{handover.initial_ho}}</td>
					<td>{{handover.approve_ho}}</td>
					<td>{{handover.remark}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				handovers: [],
				// handovers: [
				// 	{
				// 		name: "satu",
				// 		id: 01 
				// 	},
				// 	{ 
				// 		name: "dua", 
				// 		id: 02
				// 	}
				// ],
			}
		},
  		mounted: function() {
  			// return {
			    console.log("mounted woi");
			    // fetch("http://rest.learncode.academy/api/rumahaah/friends")
			    fetch("http://127.0.0.1:8000/winopp/api/winopp/")
			      .then(response => response.json())
			      .then((data) => {
			        this.handovers = data;
			      })
			  // }
		}
	}
</script>
<style></style>