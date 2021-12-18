export const dashboardTemplate = () => `
  <ul class="nav nav-tabs">
    <li><a class="active" data-toggle="tab" href="#roadmap">Road Map</a></li>
    <li><a data-toggle="tab" href="#menu1">Pie Chart</a></li>
  </ul>

  <div class="tab-content">
    <div id="roadmap" class="tab-pane fade in active show">
      <div class="row">
        <div class="col-lg-12">
          <div id="roadmapChart"></div>
        </div>
      </div>
      </div>
    <div id="menu1" class="tab-pane fade">
      <div class="row">
        <div class="col-lg-12">
          <div id="marketingCampaignChart"></div>
        </div>
      </div>
    </div>
  </div>
`
