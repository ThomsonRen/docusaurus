/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useContextualSearchFilters from '@theme/hooks/useContextualSearchFilters';

// Translate search-engine agnostic search filters to Algolia search filters
export default function useAlgoliaContextualFacetFilters() {
  const {language, tags} = useContextualSearchFilters();

  const languageFilter = `language:${language}`;

  const tagsFilter = tags.map((tag) => `docusaurus_tag:${tag}`);

  return [languageFilter, tagsFilter];
}
