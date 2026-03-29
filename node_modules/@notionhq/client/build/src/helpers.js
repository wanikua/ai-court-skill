"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iteratePaginatedAPI = iteratePaginatedAPI;
exports.collectPaginatedAPI = collectPaginatedAPI;
exports.iterateDataSourceTemplates = iterateDataSourceTemplates;
exports.collectDataSourceTemplates = collectDataSourceTemplates;
exports.isFullBlock = isFullBlock;
exports.isFullPage = isFullPage;
exports.isFullDataSource = isFullDataSource;
exports.isFullDatabase = isFullDatabase;
exports.isFullPageOrDataSource = isFullPageOrDataSource;
exports.isFullUser = isFullUser;
exports.isFullComment = isFullComment;
exports.isTextRichTextItemResponse = isTextRichTextItemResponse;
exports.isEquationRichTextItemResponse = isEquationRichTextItemResponse;
exports.isMentionRichTextItemResponse = isMentionRichTextItemResponse;
exports.extractNotionId = extractNotionId;
exports.extractDatabaseId = extractDatabaseId;
exports.extractPageId = extractPageId;
exports.extractBlockId = extractBlockId;
/**
 * Returns an async iterator over the results of any paginated Notion API.
 *
 * Example (given a notion Client called `notion`):
 *
 * ```
 * for await (const block of iteratePaginatedAPI(notion.blocks.children.list, {
 *   block_id: parentBlockId,
 * })) {
 *   // Do something with block.
 * }
 * ```
 *
 * @param listFn A bound function on the Notion client that represents a conforming paginated
 *   API. Example: `notion.blocks.children.list`.
 * @param firstPageArgs Arguments that should be passed to the API on the first and subsequent
 *   calls to the API. Any necessary `next_cursor` will be automatically populated by
 *   this function. Example: `{ block_id: "<my block id>" }`
 */
async function* iteratePaginatedAPI(listFn, firstPageArgs) {
    let nextCursor = firstPageArgs.start_cursor;
    do {
        const response = await listFn({
            ...firstPageArgs,
            start_cursor: nextCursor,
        });
        yield* response.results;
        nextCursor = response.next_cursor;
    } while (nextCursor);
}
/**
 * Collect all of the results of paginating an API into an in-memory array.
 *
 * Example (given a notion Client called `notion`):
 *
 * ```
 * const blocks = await collectPaginatedAPI(notion.blocks.children.list, {
 *   block_id: parentBlockId,
 * })
 * // Do something with blocks.
 * ```
 *
 * @param listFn A bound function on the Notion client that represents a conforming paginated
 *   API. Example: `notion.blocks.children.list`.
 * @param firstPageArgs Arguments that should be passed to the API on the first and subsequent
 *   calls to the API. Any necessary `next_cursor` will be automatically populated by
 *   this function. Example: `{ block_id: "<my block id>" }`
 */
async function collectPaginatedAPI(listFn, firstPageArgs) {
    const results = [];
    for await (const item of iteratePaginatedAPI(listFn, firstPageArgs)) {
        results.push(item);
    }
    return results;
}
/**
 * Returns an async iterator over data source templates.
 *
 * Example (given a notion Client called `notion`):
 *
 * ```
 * for await (const template of iterateDataSourceTemplates(notion, {
 *   data_source_id: dataSourceId,
 * })) {
 *   console.log(template.name, template.is_default)
 * }
 * ```
 *
 * @param client A Notion client instance.
 * @param args Arguments including the data_source_id and optional start_cursor.
 */
async function* iterateDataSourceTemplates(client, args) {
    let nextCursor = args.start_cursor;
    do {
        const response = await client.dataSources.listTemplates({
            ...args,
            start_cursor: nextCursor,
        });
        yield* response.templates;
        nextCursor = response.next_cursor;
    } while (nextCursor);
}
/**
 * Collect all data source templates into an in-memory array.
 *
 * Example (given a notion Client called `notion`):
 *
 * ```
 * const templates = await collectDataSourceTemplates(notion, {
 *   data_source_id: dataSourceId,
 * })
 * // Do something with templates.
 * ```
 *
 * @param client A Notion client instance.
 * @param args Arguments including the data_source_id and optional start_cursor.
 */
async function collectDataSourceTemplates(client, args) {
    const results = [];
    for await (const template of iterateDataSourceTemplates(client, args)) {
        results.push(template);
    }
    return results;
}
/**
 * @returns `true` if `response` is a full `BlockObjectResponse`.
 */
function isFullBlock(response) {
    return response.object === "block" && "type" in response;
}
/**
 * @returns `true` if `response` is a full `PageObjectResponse`.
 */
function isFullPage(response) {
    return response.object === "page" && "url" in response;
}
/**
 * @returns `true` if `response` is a full `DataSourceObjectResponse`.
 */
function isFullDataSource(response) {
    return response.object === "data_source";
}
/**
 * @returns `true` if `response` is a full `DatabaseObjectResponse`.
 */
function isFullDatabase(response) {
    return response.object === "database";
}
/**
 * @returns `true` if `response` is a full `DataSourceObjectResponse` or a full
 * `PageObjectResponse`.
 *
 * Can be used on the results of the list response from `queryDataSource` or
 * `search` APIs.
 */
function isFullPageOrDataSource(response) {
    if (response.object === "data_source") {
        return isFullDataSource(response);
    }
    else {
        return isFullPage(response);
    }
}
/**
 * @returns `true` if `response` is a full `UserObjectResponse`.
 */
function isFullUser(response) {
    return "type" in response;
}
/**
 * @returns `true` if `response` is a full `CommentObjectResponse`.
 */
function isFullComment(response) {
    return "created_by" in response;
}
/**
 * @returns `true` if `richText` is a `TextRichTextItemResponse`.
 */
function isTextRichTextItemResponse(richText) {
    return richText.type === "text";
}
/**
 * @returns `true` if `richText` is an `EquationRichTextItemResponse`.
 */
function isEquationRichTextItemResponse(richText) {
    return richText.type === "equation";
}
/**
 * @returns `true` if `richText` is an `MentionRichTextItemResponse`.
 */
function isMentionRichTextItemResponse(richText) {
    return richText.type === "mention";
}
/**
 * Extracts a Notion ID from a Notion URL or returns the input if it's already a valid ID.
 *
 * Prioritizes path IDs over query parameters to avoid extracting view IDs instead of database IDs.
 *
 * @param urlOrId A Notion URL or ID string
 * @returns The extracted UUID in standard format (with hyphens) or null if invalid
 *
 * @example
 * ```typescript
 * // Database URL with view ID - extracts database ID, not view ID
 * extractNotionId('https://notion.so/workspace/DB-abc123def456789012345678901234ab?v=viewid123')
 * // Returns: 'abc123de-f456-7890-1234-5678901234ab' (database ID)
 *
 * // Already formatted UUID
 * extractNotionId('12345678-1234-1234-1234-123456789abc')
 * // Returns: '12345678-1234-1234-1234-123456789abc'
 * ```
 */
function extractNotionId(urlOrId) {
    if (!urlOrId || typeof urlOrId !== "string") {
        return null;
    }
    const trimmed = urlOrId.trim();
    // Check if it's already a properly formatted UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (uuidRegex.test(trimmed)) {
        return trimmed.toLowerCase();
    }
    // Check if it's a compact UUID (32 chars, no hyphens)
    const compactUuidRegex = /^[0-9a-f]{32}$/i;
    if (compactUuidRegex.test(trimmed)) {
        return formatUuid(trimmed);
    }
    // Extract from URL - prioritize path over query parameters
    // This prevents extracting view IDs when database IDs are in the path
    const pathMatch = trimmed.match(/\/[^/?#]*-([0-9a-f]{32})(?:[/?#]|$)/i);
    if (pathMatch && pathMatch[1]) {
        return formatUuid(pathMatch[1]);
    }
    // Fallback to query parameters if no path ID found
    const queryMatch = trimmed.match(/[?&](?:p|page_id|database_id)=([0-9a-f]{32})/i);
    if (queryMatch && queryMatch[1]) {
        return formatUuid(queryMatch[1]);
    }
    // Last resort: any 32-char hex string in the URL
    const anyMatch = trimmed.match(/([0-9a-f]{32})/i);
    if (anyMatch && anyMatch[1]) {
        return formatUuid(anyMatch[1]);
    }
    return null;
}
/**
 * Formats a 32-character hex string into a standard UUID format.
 * @param compactId 32-character hex string without hyphens
 * @returns UUID with hyphens in standard format
 */
function formatUuid(compactId) {
    const clean = compactId.toLowerCase();
    return `${clean.slice(0, 8)}-${clean.slice(8, 12)}-${clean.slice(12, 16)}-${clean.slice(16, 20)}-${clean.slice(20, 32)}`;
}
/**
 * Extracts a database ID from a Notion database URL.
 * Convenience wrapper around `extractNotionId`.
 */
function extractDatabaseId(databaseUrl) {
    return extractNotionId(databaseUrl);
}
/**
 * Extracts a page ID from a Notion page URL.
 * Convenience wrapper around `extractNotionId`.
 */
function extractPageId(pageUrl) {
    return extractNotionId(pageUrl);
}
/**
 * Extracts a block ID from a Notion URL with a block fragment.
 * Looks for #block-<id> or #<id> patterns.
 */
function extractBlockId(urlWithBlock) {
    if (!urlWithBlock || typeof urlWithBlock !== "string") {
        return null;
    }
    // Look for block fragment in URL (#block-32chars or just #32chars)
    const blockMatch = urlWithBlock.match(/#(?:block-)?([0-9a-f]{32})/i);
    if (blockMatch && blockMatch[1]) {
        return formatUuid(blockMatch[1]);
    }
    return null;
}
//# sourceMappingURL=helpers.js.map