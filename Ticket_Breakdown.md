# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

<br>

# **Ticket 1**: Allow Facilities to save custom IDs for Agents

We will add the ability for Facilities to save custom IDs for Agents they work with. This custom ID will be used instead of the Agent's internal database ID on any reports generated for that Facility.

<br>

### **Acceptance Criteria**:

- A new field "custom_id" will be added to the Agents table
- Facilities can update the custom_id for an Agent on the Agent detail page
- Custom IDs will be shown on reports generated for a Facility instead of the internal database ID

<br>

### **Time/Effort Estimate:**

- **Back-end: 2 hours**
- **Front-end: 2 hours**

<br>

### Implementation Details:

- Add a new column "custom_id" to the Agents table in the database
- Modify the Agent detail page to allow Facilities to update the custom_id
- Modify the report generation function to use the custom_id instead of the internal database ID when generating reports for a Facility

<br>

# **Ticket 2**: Update `getShiftsByFacility` function to return custom_id for Agents

### **Description**:

We will update the `getShiftsByFacility` function to include the custom_id for each Agent in the Shift metadata returned to the Facility.

<br>

### **Acceptance Criteria**:

The `getShiftsByFacility` function will return the custom_id for each Agent in the Shift metadata
The custom_id will only be returned if it has been set by the Facility

<br>

### **Time/Effort Estimate**:

- **Back-end: 2 hours**

<br>

### **Implementation Details**:

Modify the SQL query in the getShiftsByFacility function to include the custom_id for each Agent in the Shift metadata returned to the Facility

<br>

# **Ticket 3**: Update `generateReport` function to use custom_id

We will update the `generateReport` function to use the custom_id instead of the internal database ID when generating reports for a Facility.

<br>

### **Acceptance Criteria**:

- The `generateReport` function will use the custom_id instead of the internal database ID when generating reports for a Facility
- If a custom_id has not been set for an Agent, the internal database ID will be used instead

<br>

### **_Time/Effort Estimate:_**

- **Back-end: 2 hours**

<br>

### **Implementation Details**:

Modify the `generateReport` function to use the custom_id instead of the internal database ID when generating reports for a Facility
If a custom_id has not been set for an Agent, use the internal database ID instead

<br>

## **Ticket 4 (Optional)**: Allow Agents to see their custom_id

We will allow Agents to see their custom_id on their profile page.

<br>

### **Acceptance Criteria**:

- Agents can see their custom_id on their profile page
- Agents cannot edit their custom_id

<br>

#### **Time/Effort Estimate**:

- **Front-end: 2 hours**

<br>

### **Implementation Details**:

- Modify the Agent profile page to display the custom_id for the Agent

<br>

# **Ticket 5 (Optional)**: Update API endpoints to support custom_id

We will update the API endpoints to include the custom_id for Agents in the response payload where applicable.

<br>

## **Acceptance Criteria**:

- The API endpoints will include the custom_id for Agents in the response payload where applicable
- The custom_id will only be returned if it has been set by the Facility

<br>

## **Time/Effort Estimate**:

- Back-end: 2 hours

<br>

## **Implementation Details**:

- Modify the API endpoints to include the custom_id for Agents in the response payload where applicable, such as in the response for the `getShiftsByFacility` function.
