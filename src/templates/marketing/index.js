export const marketingTemplate = (project) => `
  <h3>Create Marketing Campaign</h3>

  <button id="create-marketing-campaign">Create</button>

  <form id="marketing-campaign-form" class="hide">
    <label for="category">Campaign</label>
    <select name="category" id="campaigns-dropdown">
      <option value="Marketing Campaign">Marketing Campaign</option>
      <option value="Email Drip">Email Drip</option>
      <option value="A/B Test Campaign">A/B Test Campaign</option>
    </select>


    <label for="task">task</label>
    <input type="text" name="task" placeholder="A/B Email Drip Campaign" />

    <label for="start">start</label>
    <input type="date" name="start" />
    
    <label for="end">end</label>
    <input type="date" name="end" />

    <button type="submit">Save</button>
  </form>
`
