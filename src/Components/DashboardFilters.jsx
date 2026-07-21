import "../Styles/DashboardFilters.css";

export default function DashboardFilters({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="dashboard-filters">

      <div className="filter-search">

        <input
          type="text"
          placeholder="Search by Request ID or Name..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

      </div>

      <div className="filter-group">

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="All">All Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">
            In Progress
          </option>
          <option value="Closed">Closed</option>
          <option value="Blocked">Blocked</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Priority">
            Priority
          </option>
        </select>

      </div>

    </section>
  );
}