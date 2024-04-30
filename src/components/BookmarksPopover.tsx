import { forwardRef } from "react";
import { useBookmarksContext } from "../lib/hooks";
import JobList from "./JobList";
import { createPortal } from "react-dom";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();

  const content =
    !isLoading && bookmarkedJobItems.length === 0 ? (
      <EmptyBookmarksPopover />
    ) : (
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    );

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      {content}
    </div>,
    document.body
  );
});

function EmptyBookmarksPopover() {
  return (
    <div className="bookmarks-popover-empty-message">
      <p className="bookmarks-popover-heading">
        You don't have any bookmarks yet
      </p>
      <p className="bookmarks-popover-subheading">
        Add bookmarks by clicking the bookmark icon next to any job in the job
        list from your search results
      </p>
    </div>
  );
}

export default BookmarksPopover;
