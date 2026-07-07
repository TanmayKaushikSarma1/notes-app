function TagFilter({ tags, selectedTag, setSelectedTag }) {
  return (
    <div className="mb-6">
      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        className="border rounded-lg p-3"
      >
        <option value="">All Tags</option>

        {tags.map((tag) => (
          <option
            key={tag}
            value={tag}
          >
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TagFilter;