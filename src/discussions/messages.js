import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  actionsAlt: {
    id: 'discussions.actions.button.alt',
    defaultMessage: 'Actions menu',
    description: 'Alt-text for dropdown button for actions related to a post or comment',
  },
  editAction: {
    id: 'discussions.actions.edit',
    defaultMessage: 'Edit',
    description: 'Action to edit a comment or post',
  },
  pinAction: {
    id: 'discussions.actions.pin',
    defaultMessage: 'Pin',
    description: 'Action to pin a post',
  },
  unpinAction: {
    id: 'discussions.actions.unpin',
    defaultMessage: 'Unpin',
    description: 'Action to unpin a post',
  },
  deleteAction: {
    id: 'discussions.actions.delete',
    defaultMessage: 'Delete',
    description: 'Action to delete a post or comment',
  },
  closeAction: {
    id: 'discussions.actions.close',
    defaultMessage: 'Close',
    description: 'Action to close a post',
  },
  reopenAction: {
    id: 'discussions.actions.reopen',
    defaultMessage: 'Reopen',
    description: 'Action to reopen a post',
  },
  reportAction: {
    id: 'discussions.actions.report',
    defaultMessage: 'Report',
    description: 'Action to report a post or comment',
  },
  unreportAction: {
    id: 'discussions.actions.unreport',
    defaultMessage: 'Unreport',
    description: 'Action to unreport a post or comment',
  },
  endorseAction: {
    id: 'discussions.actions.endorse',
    defaultMessage: 'Endorse',
    description: 'Action to endorse a comment',
  },
  unendorseAction: {
    id: 'discussions.actions.unendorse',
    defaultMessage: 'Unendorse',
    description: 'Action to unendorse a post or comment',
  },
  markAnsweredAction: {
    id: 'discussions.actions.markAnswered',
    defaultMessage: 'Mark as Answered',
    description: 'Action to mark a comment as answering a post',
  },
  unmarkAnsweredAction: {
    id: 'discussions.actions.unMarkAnswered',
    defaultMessage: 'Unmark as answered',
    description: 'Action to unmark a comment as answering a post',
  },
  deleteConfirmationCancel: {
    id: 'discussions.delete.confirmation.button.cancel',
    defaultMessage: 'Cancel',
    description: 'Cancel button shown on delete confirmation dialog',
  },
  deleteConfirmationDelete: {
    id: 'discussions.delete.confirmation.button.delete',
    defaultMessage: 'Delete',
    description: 'Delete button shown on delete confirmation dialog',
  },
  emptyAllTopics: {
    id: 'discussions.empty.allTopics',
    defaultMessage:
      'All discussion activity for these topics will show up here.',
    description: 'Message shown on page when no posts found related to topic.',
  },
  emptyAllPosts: {
    id: 'discussions.empty.allPosts',
    defaultMessage:
      'All discussion activity for your course will show up here.',
    description: 'Message shown on page when no posts found for the course.',
  },
  emptyMyPosts: {
    id: 'discussions.empty.myPosts',
    defaultMessage: "Posts you've interacted with will show up here.",
    description: 'Message shown on page when no messages found for the user.',
  },
  emptyTopic: {
    id: 'discussions.empty.topic',
    defaultMessage: 'All discussion activity for this topic will show up here.',
    description: 'Message shown when visiting a topic with no comments.',
  },
  emptyTitle: {
    id: 'discussions.empty.title',
    defaultMessage: 'Nothing here yet',
    description: 'Title shown on empty pages below image.',
  },
  noPostSelected: {
    id: 'discussions.empty.noPostSelected',
    defaultMessage: 'No post selected',
    description: 'Title on posts pages when user has yet to select a post to display.',
  },
  noTopicSelected: {
    id: 'discussions.empty.noTopicSelected',
    defaultMessage: 'No topic selected',
    description: 'Title on topic pages when user has yet to select a topic.',
  },
  noResultsFound: {
    id: 'discussions.sidebar.noResultsFound',
    defaultMessage: 'No results found',
    description: 'Title on the discussion sidebar when there are now results after filtering',
  },
  removeKeywords: {
    id: 'discussions.sidebar.removeKeywords',
    defaultMessage: 'Try searching different keywords or removing some filters',
    description: 'Message shown on discussion sidebar if user searched with keywords.',
  },
  removeFilters: {
    id: 'discussions.sidebar.removeFilters',
    defaultMessage: 'Try removing some filters',
    description: 'Message shown on discussion sidebar if user filtered results.',
  },
  emptyIconAlt: {
    id: 'discussions.empty.iconAlt',
    defaultMessage: 'Empty',
    description: 'Alt-text for image showing empty state',
  },
});

export default messages;