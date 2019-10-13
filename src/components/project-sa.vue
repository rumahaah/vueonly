<template>
	<!-- CONTENT -->
	<div id="content" data-uk-height-viewport="expand: true">
		<div class="uk-container uk-container-expand">
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
						<tr v-for="project in project_sa">
							<td>{{project.psa_pca}}</td>
							<td>{{project.customerp}}</td>
							<td>{{project.project_name}}</td>
							<td>{{project.sa}}</td>
							<td>{{project.pss}}</td>
							<td>{{project.jm}}</td>
							<td>{{project.bigco}}</td>
							<td>{{project.progress}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<span>{{total}}</span>
			<span>{{resultCount}}</span>
			<footer class="uk-section uk-section-small uk-text-center">
				<hr>
				<p class="uk-text-small uk-text-center">Copyright 2019 - <a href="https://github.com/zzseba78/Kick-Off">Created by KickOff</a> | Built with <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip><span data-uk-icon="uikit"></span></a> </p>
			</footer>
		</div>
	</div>
	<!-- /CONTENT -->
</template>

<script>
	module.exports = {
		data: function() {
			return {
				// total: [],
				project_sa: [
				  {
				    "customer": "B",
				    "project_name": "proyek bbb",
				    "oppty_id": "00690000016RVfF",
				    "remark": "Tidak ada update dari Sales",
				    "sa": "MBO",
				    "sales": "oi",
				    "pss": "BRD",
				    "bigco": "Yes",
				    "progress": "Cancelled",
				    "product": "ITS",
				    "taxsonomi": "Sec&Col",
				    "payment_type": "MRC",
				    "psa_pca": 1,
				    "total_ho_pm": 2,
				    "sla_psa_pca": "fulfilled",
				    "sla_ho_pm": "fulfilled",
				    "acv": 0,
				    "tcv": 0,
				    "jm": "RHT",
				    "sales_dept": "hiks",
				    "division": "SRPI",
				    "total_opex": 0,
				    "total_cos": 0
				  },
				  {
				    "customer": "A",
				    "project_name": "proyek aaa",
				    "oppty_id": "0062v000015cS1o",
				    "remark": "Belum ada update dr PSS",
				    "sa": "MBO",
				    "sales": "au",
				    "pss": "NHR",
				    "bigco": "No",
				    "progress": "Cancelled",
				    "product": "ITS",
				    "taxsonomi": "Datacom",
				    "payment_type": "MRC",
				    "psa_date": 43515,
				    "ho_psa_to_pca": 43517,
				    "pca_date": 43517,
				    "psa_pca": 1,
				    "total_ho_pm": 3,
				    "sla_psa_pca": "fulfilled",
				    "sla_ho_pm": "fulfilled",
				    "acv": 0,
				    "tcv": 0,
				    "jm": "RHT",
				    "sales_dept": "hoks",
				    "division": "SRPI",
				    "total_opex": 0,
				    "total_cos": 0
				  }
				],
			}
		},
		method:{

		},
  		mounted: function() {
  			// return {
			    console.log("mounted project");
			    // fetch("http://rest.learncode.academy/api/rumahaah/friends")
			    // fetch("http://127.0.0.1:8000/winopp/api/winopp/")
			    //   .then(response => response.json())
			    //   .then((data) => {
			    //     this.handovers = data;
			    //   })
			  // }
		},
		computed: {
			testing (){
				return

			},
			// shoppingCartTotal() {
			//     return this.cart.map(item => item.price).reduce((total, amount) => total + amount);
			// }
			total: function(){

			  let total = [];

			  Object.entries(this.project_sa).forEach(([key, val]) => {
			      total.push(val.total_ho_pm) // the value of the current key.
			  });

			  return total.reduce(function(total, num){ return total + num }, 0);

			},
			resultCount: function() {
			    return this.project_sa.length
			}
		},
	}
</script>
<style></style>