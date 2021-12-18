export const dashboardTemplate = () => `
  <ul class="nav nav-tabs">
    <li><a class="active" data-toggle="tab" href="#roadmap">Road Map</a></li>
    <li><a data-toggle="tab" href="#menu1">Pie Chart</a></li>
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
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
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </div>
`
