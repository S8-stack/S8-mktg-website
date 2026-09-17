#!/usr/bin/env python3
"""Generate static MDN-style doc pages. Run from repo root: python3 tools/render-docs.py"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>@@TITLE@@ — S8 Docs</title>
  <meta name="description" content="@@DESC@@">
  <link rel="canonical" href="https://stack8.tech@@CANONICAL@@">
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Open+Sans:wght@400;600;700;800&display=swap">
  <link rel="stylesheet" href="/assets/css/site.css">
</head>
<body>
  <div id="site-header"></div>
  <div class="docs-shell">
    <aside class="docs-nav" data-docs-nav></aside>
    <div class="docs-main" id="content">
      <div class="docs-wide">
        <article>
@@BODY@@
        </article>
        <nav class="toc" data-toc></nav>
      </div>
    </div>
  </div>
  <div id="site-footer"></div>
  <script src="/assets/js/site.js"></script>
</body>
</html>
"""


def codebox(filename, lang, src):
    return (
        '<div class="codebox">\n'
        '  <div class="codebox-bar">\n'
        '    <span class="filename">@@FILE@@</span>\n'
        '    <button class="copy" type="button" data-copy>Copy</button>\n'
        '  </div>\n'
        '  <pre data-lang="@@LANG@@"><code class="lang-@@LANG@@">@@SRC@@\n'
        '</code></pre>\n'
        '</div>'
    ).replace("@@FILE@@", filename).replace("@@LANG@@", lang).replace("@@SRC@@", src.strip())


def emit(path, title, desc, canonical, body):
    html = (
        HEAD.replace("@@TITLE@@", title)
        .replace("@@DESC@@", desc)
        .replace("@@CANONICAL@@", canonical)
        .replace("@@BODY@@", body.strip())
    )
    out = ROOT / path
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding="utf-8")
    print("wrote", path)


emit(
    "docs/index.html",
    "What is S8",
    "S8 is a unified JAVA stack: server, front, databases, and orchestration already assembled.",
    "/docs/",
    """
<p class="crumb"><a href="/docs/">Docs</a></p>
<h1 class="plain">What is S8</h1>
<div class="badge-row">
  <span class="badge badge-api">S8 stack</span>
  <span class="badge">v0.8</span>
  <span class="badge">JAVA</span>
</div>
<p>S8 (Stack8) is a unified JAVA stack. The web server, the front, the databases, and the orchestration are already supplied and tightly assembled. You do not pick a servlet container, then a front framework, then a database product, then an integration layer. You write against one API.</p>
<p>The stack abstracts the low-level webapp machinery: HTTP/2 and TLS, request mapping, the thread model, databases, and the front/back API.</p>
<div class="intent">
  <strong>Mission</strong>
  Collapse the distance between an idea and a running product. S8 exists so a small team can ship rich SaaS in one language and one process — Spring Boot, four steps ahead.
</div>
<h2 id="how-to-read">How to read these docs</h2>
<p>These pages are written for humans <em>and</em> for AI coding agents. Signatures, intents, and stub examples sit next to each other on purpose. Agents should start at <a href="/llms.txt"><code>/llms.txt</code></a>.</p>
<h2 id="three-modules">Three modules describe the whole stack</h2>
<ul>
  <li><a href="/docs/api/"><strong>S8-meta-API</strong></a> — everything you need to code against S8.</li>
  <li><a href="/docs/modules/"><strong>S8-meta-env</strong></a> — the module overlay (DEV vs PROD, <code>MODULE</code>, web sources).</li>
  <li><a href="/docs/build/"><strong>S8-meta-build</strong></a> — how <code>build.properties</code> and <code>S8StackBuilder</code> compile the stack.</li>
</ul>
<h2 id="runtime-shape">Runtime shape</h2>
<p>A typical process boots an <code>S8WebServer</code>, registers an <code>S8BootMethod</code> on <code>/</code>, and from then on every request is a fresh <a href="/docs/api/s8-sync-flow.html"><code>S8SyncFlow</code></a> running on a virtual thread. The flow is the gateway: <code>front()</code>, <code>tables()</code>, <code>spaces()</code>, <code>repositories()</code>, <code>mail()</code>, <code>delegate()</code>, <code>refresh()</code>.</p>
""",
)

emit(
    "docs/api/index.html",
    "S8 API overview",
    "Map of the S8 public API in com.s8.meta.api.",
    "/docs/api/",
    """
<p class="crumb"><a href="/docs/">Docs</a> / API</p>
<h1 class="plain">API overview</h1>
<div class="badge-row">
  <span class="badge badge-api">com.s8.meta.api</span>
  <span class="badge">module S8-meta-API</span>
</div>
<p>All application code talks to S8 through <code>com.s8.meta.api</code>. It is an API-only module: interfaces, annotations, and request types. Implementations arrive via <code>ServiceLoader</code>.</p>
<div class="note">
  <strong>Current names</strong>
  Live sources use <code>S8SyncFlow</code>, <code>S8.WEB_SERVER_FACTORY</code>, and <code>com.s8.meta.api.front</code>. Older comments may still say <code>S8AsyncFlow</code> or <code>S8.FACTORY</code>. Prefer the signatures on these pages.
</div>
<h2 id="packages">Packages</h2>
<dl class="deflist">
  <dt><a href="/docs/api/s8.html">com.s8.meta.api</a></dt>
  <dd>Façade <code>S8</code> holding the SPI factories.</dd>
  <dt><a href="/docs/api/server.html">com.s8.meta.api.server</a></dt>
  <dd>Web server factory, server, boot method, parameters.</dd>
  <dt><a href="/docs/api/s8-sync-flow.html">com.s8.meta.api.flow</a></dt>
  <dd>The orchestration flow, user, exceptions.</dd>
  <dt><a href="/docs/api/front.html">com.s8.meta.api.front</a></dt>
  <dd>Remote UI graph: session, objects, vertices, inbound/outbound.</dd>
  <dt><a href="/docs/api/tables.html">com.s8.meta.api.flow.table</a></dt>
  <dd>Flash key/value tables of <code>RowS8Object</code>.</dd>
  <dt><a href="/docs/api/spaces.html">com.s8.meta.api.flow.space</a></dt>
  <dd>Object-graph spaces.</dd>
  <dt><a href="/docs/api/repositories.html">com.s8.meta.api.flow.repository</a></dt>
  <dd>Git-like object repositories.</dd>
  <dt><a href="/docs/api/mail.html">com.s8.meta.api.flow.mail</a></dt>
  <dd>Outbound mail through the flow.</dd>
  <dt><a href="/docs/api/annotations.html">com.s8.meta.api.annotations</a></dt>
  <dd><code>@S8ObjectType</code>, <code>@S8Field</code>, <code>@S8Method</code>, <code>@S8RowType</code>.</dd>
  <dt><a href="/docs/api/serial.html">serial / bytes</a></dt>
  <dd>Binary protocol, prototypes, typed inflows/outflows.</dd>
  <dt><a href="/docs/api/scripts.html">com.s8.meta.api.script</a></dt>
  <dd>Dev-ops scripts against a live flow.</dd>
</dl>
<h2 id="typical-flow">Typical call shape</h2>
{code}
<p>See <a href="/learn/">Your first app</a> for a walkthrough.</p>
""".format(
        code=codebox(
            "shape.txt",
            "java",
            """
// boot
S8.WEB_SERVER_FACTORY.createWebServer(config, BootClass, params ->
    params.addBootMethod("/", flow -> { /* live S8SyncFlow */ }));

// inside boot / inbound handler
flow.front();
flow.tables();
flow.spaces();
flow.repositories();
flow.refresh();
""",
        )
    ),
)

emit(
    "docs/api/s8.html",
    "S8",
    "S8 is the static ServiceLoader façade for the web server and script runner factories.",
    "/docs/api/s8.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / S8</p>
<h1>S8</h1>
<div class="badge-row">
  <span class="badge badge-api">com.s8.meta.api.S8</span>
  <span class="badge">SPI façade</span>
</div>
<p><code>S8</code> is the static entry into the stack. It does not construct servers itself. It loads the first <code>S8WebServerFactory</code> and <code>S8ScriptRunnerFactory</code> on the module path.</p>
<h2 id="static-fields">Static fields</h2>
<dl class="deflist">
  <dt>WEB_SERVER_FACTORY</dt>
  <dd>Loaded <code>S8WebServerFactory</code>. <span class="sig">public final static S8WebServerFactory WEB_SERVER_FACTORY</span></dd>
  <dt>SCRIPT_RUNNER_FACTORY</dt>
  <dd>Loaded <code>S8ScriptRunnerFactory</code>. <span class="sig">public final static S8ScriptRunnerFactory SCRIPT_RUNNER_FACTORY</span></dd>
</dl>
<h2 id="failure">Failure mode</h2>
<p>If no implementation is on the module path, static initialization throws <code>IllegalStateException</code>. Put the implementation module on the module path (Xenon for the web server, Krypton for scripts).</p>
<h2 id="example">Example</h2>
{code}
<div class="intent"><strong>Intent</strong> Keep application code free of implementation types. Depend on <code>com.s8.meta.api</code>; let the runtime plug the server underneath.</div>
""".format(
        code=codebox(
            "usage.java",
            "java",
            """
S8WebServer server = S8.WEB_SERVER_FACTORY.createWebServer(
    "/path/to/app-config.xml",
    LaunchServer.class,
    params -> params.addBootMethod(S8BootMethod.MAIN_BOOT_PAGE, AppBoot.INSTANCE));
server.start();
""",
        )
    ),
)

emit(
    "docs/api/s8-sync-flow.html",
    "S8SyncFlow",
    "S8SyncFlow is the main orchestration flow of the S8 stack. Fresh, short-lived, virtual-threaded.",
    "/docs/api/s8-sync-flow.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / S8SyncFlow</p>
<h1>S8SyncFlow</h1>
<div class="badge-row">
  <span class="badge badge-api">com.s8.meta.api.flow</span>
  <span class="badge">interface</span>
</div>
<p>The main orchestration flow of the S8 stack. A flow lives for one request or one script. Fresh flows are provided continuously by the system.</p>
<div class="warn">
  <strong>Do not reuse, store, or cache a flow.</strong>
  Anything other than live use during the current request or script is unsupported.
</div>
<p>Flows always run inside virtual threads. Write plain Java; it will run safely at high performance.</p>
<h2 id="constants">Constants</h2>
<dl class="deflist">
  <dt>CREATE_SPACE_IF_NOT_PRESENT</dt><dd><span class="sig">static final long · Bool64.BIT02</span></dd>
  <dt>SAVE_IMMEDIATELY_AFTER</dt><dd><span class="sig">static final long · Bool64.BIT03</span></dd>
  <dt>SHOULD_NOT_OVERRIDE</dt><dd><span class="sig">static final long · Bool64.BIT04</span></dd>
  <dt>HEAD_VERSION</dt><dd>HEAD tag for a repository. <span class="sig">static final long HEAD_VERSION = -0x62L</span></dd>
</dl>
<h2 id="identity">Identity</h2>
<dl class="deflist">
  <dt>getMe()</dt><dd>Return the flow owner. <span class="sig">S8User getMe()</span></dd>
  <dt>setMe(user)</dt><dd>Define the flow owner. <span class="sig">void setMe(S8User user)</span></dd>
  <dt>getMySpaceId()</dt><dd>Personal space id of the current user, or <code>null</code>. <span class="sig">default String getMySpaceId()</span></dd>
</dl>
<h2 id="gateways">Gateways</h2>
<dl class="deflist">
  <dt>front()</dt><dd>Web front when present. <span class="sig">S8FrontSession front()</span></dd>
  <dt>tables()</dt><dd>Flash persistency. <span class="sig">TablesDB tables()</span></dd>
  <dt>spaces()</dt><dd>Object-graph spaces. <span class="sig">SpacesDB spaces()</span></dd>
  <dt>repositories()</dt><dd>Git-like object repositories. <span class="sig">RepositoriesDB repositories()</span></dd>
  <dt>mail()</dt><dd>Mail manager. <span class="sig">MailManager mail() throws S8FlowException</span></dd>
  <dt>delegate()</dt><dd>Offload heavy work (profiles FX0–FX7, IO, WEB). <span class="sig">DelegatedRunner delegate()</span></dd>
</dl>
<h2 id="io">I/O on the flow</h2>
<dl class="deflist">
  <dt>sendResponse(request)</dt><dd>Send an external response. <span class="sig">void sendResponse(SendExtResponseS8Request) throws S8FlowException</span></dd>
  <dt>deliver(load, generator)</dt><dd>Deliver a generated web resource. <span class="sig">void deliver(int load, S8WebResourceGenerator) throws S8FlowException</span></dd>
  <dt>refresh()</dt><dd>Push the current front delta to the browser. Call after mutating outbound fields. Inbound lambdas call it for you. <span class="sig">void refresh() throws S8FlowException</span></dd>
</dl>
<h2 id="example">Example</h2>
{code}
<div class="intent"><strong>Intent</strong> If a feature of the stack exists, it is reached from the flow — not from a second client library.</div>
""".format(
        code=codebox(
            "boot.java",
            "java",
            """
@Override
public void boot(S8SyncFlow flow) throws Exception {
  flow.setMe(currentUser);
  HomeScreen screen = new HomeScreen(flow.front());
  screen.vertex.expose(0);
  flow.refresh();
}
""",
        )
    ),
)

emit(
    "docs/api/server.html",
    "Server and boot",
    "S8WebServer, S8WebServerFactory, S8BootMethod — how an S8 process starts.",
    "/docs/api/server.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / Server</p>
<h1 class="plain">Server &amp; boot</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.api.server</span></div>
<p>An S8 process is a web server plus the boot methods that paint the first screens. The factory builds the server from an XML config path, a boot-layer origin class (used to locate the module), and a parameter setter.</p>
<h2 id="boot-method">S8BootMethod</h2>
<p>A functional interface. The constant <code>MAIN_BOOT_PAGE</code> is <code>"/"</code>.</p>
<dl class="deflist">
  <dt>boot(flow)</dt>
  <dd>Called with a fresh flow when that path is hit. <span class="sig">void boot(S8SyncFlow flow) throws Exception</span></dd>
</dl>
<h2 id="factory">S8WebServerFactory</h2>
<p>Created for you as <code>S8.WEB_SERVER_FACTORY</code>.</p>
<dl class="deflist">
  <dt>createWebServer(configPathname, bootLayerOrigin, setup)</dt>
  <dd>Build a server. <code>bootLayerOrigin</code> is typically <code>LaunchServer.class</code>.</dd>
</dl>
<h2 id="server">S8WebServer</h2>
<dl class="deflist">
  <dt>start()</dt>
  <dd>Bind and run. <span class="sig">void start() throws Exception</span></dd>
</dl>
<h2 id="parameters">Parameters</h2>
<p><code>S8WebServerParameters.addBootMethod(String path, S8BootMethod method)</code> registers a boot handler. Multiple paths are allowed; <code>/</code> is the home screen.</p>
<h2 id="example">Example</h2>
{code}
<div class="intent"><strong>Intent</strong> Boot methods replace both a router and a first-paint controller. After boot, inbound front methods keep the app alive.</div>
""".format(
        code=codebox(
            "LaunchServer.java",
            "java",
            """
public class LaunchServer {
  public static void main(String[] args) throws Exception {
    S8WebServer server = S8.WEB_SERVER_FACTORY.createWebServer(
        "/path/to/app-config.xml",
        LaunchServer.class,
        params -> params.addBootMethod(S8BootMethod.MAIN_BOOT_PAGE, AppBoot.INSTANCE));
    server.start();
  }
}
""",
        )
    ),
)

emit(
    "docs/api/front.html",
    "Front",
    "S8FrontSession, S8FrontObject, S8FrontVertex — the browser as a remote screen.",
    "/docs/api/front.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / Front</p>
<h1 class="plain">Front</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.api.front</span></div>
<p>The front is a native-style UI API whose objects are transmitted and rendered in the distant browser. You create objects on the server. The stack mirrors them to the screen.</p>
<h2 id="session">S8FrontSession</h2>
<dl class="deflist">
  <dt>createVertex(typeName, object)</dt>
  <dd>Called for you from the <code>S8FrontObject</code> constructor. <span class="sig">S8FrontVertex createVertex(String typeName, S8FrontObject object)</span></dd>
</dl>
<h2 id="object">S8FrontObject</h2>
<p>Base type of every object that can populate the front. Holds a final <code>vertex</code>.</p>
<dl class="deflist">
  <dt>S8FrontObject(front, typeName)</dt>
  <dd>Creates the vertex and assigns this object to it. The <code>typeName</code> must match the front schema (and typically <code>@S8ObjectType.name</code>).</dd>
</dl>
<h2 id="vertex">S8FrontVertex</h2>
<dl class="deflist">
  <dt>expose(slot)</dt>
  <dd>Publish this object into an exposure slot (slot <code>0</code> is the usual root of the page).</dd>
  <dt>outbound()</dt>
  <dd>Server → browser field updates: <code>setBool8Field</code>, <code>setStringUTF8Field</code>, <code>setObjectField</code>, lists, arrays.</dd>
  <dt>inbound()</dt>
  <dd>Browser → server method dispatch: <code>setVoidMethod</code>, <code>setStringUTF8Method</code>, plus <code>*MethodLambda</code> helpers that auto-<code>refresh()</code>.</dd>
  <dt>providers()</dt>
  <dd>Raw resource providers for generated bytes (images, files).</dd>
</dl>
<h2 id="functions-vs-lambdas">Functions vs lambdas</h2>
<p><strong>Functions</strong> receive <code>(S8SyncFlow flow, …)</code> and may throw <code>S8FlowException</code>. You decide when to <code>refresh()</code>.</p>
<p><strong>Lambdas</strong> receive only the argument. The inbound wrapper runs <code>operate</code> then <code>flow.refresh()</code>.</p>
{code1}
{code2}
<div class="intent"><strong>Intent</strong> If you would call a setter on a desktop widget, call it on <code>vertex.outbound()</code>. If you would register a click handler, register it on <code>vertex.inbound()</code>.</div>
""".format(
        code1=codebox(
            "HomeScreen.java",
            "java",
            """
@S8ObjectType(name = "app.HomeScreen")
public class HomeScreen extends S8FrontObject {
  public HomeScreen(S8FrontSession front) {
    super(front, "app.HomeScreen");
    vertex.inbound().setStringUTF8Method("onSubmit", (flow, value) -> {
      // full control, including when to refresh
      flow.refresh();
    });
    vertex.inbound().setVoidMethodLambda("onReady", () -> {
      // operate + auto-refresh
    });
  }
  public void setTitle(String title) {
    vertex.outbound().setStringUTF8Field("title", title);
  }
}
""",
        ),
        code2=codebox(
            "types.java",
            "java",
            """
// Function interfaces live under com.s8.meta.api.front.functions.*
// Lambda interfaces live under com.s8.meta.api.front.lambdas.*
// Families: Void, Bool8, UInt8/16/32/64, Int8/16/32/64,
// Float32/64, StringUTF8, matching arrays, Object, ObjectsList.
""",
        ),
    ),
)

emit(
    "docs/api/tables.html",
    "TablesDB",
    "Flash persistency: create a table, put a row, get a row, select rows.",
    "/docs/api/tables.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / TablesDB</p>
<h1>TablesDB</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.api.flow.table</span></div>
<p>Flash persistency. Tables hold <code>RowS8Object</code> rows addressed by a string key. Table ids match <code>[a-zA-Z0-9\\-_]+</code>.</p>
<h2 id="methods">Instance methods</h2>
<dl class="deflist">
  <dt>createTable(request)</dt><dd><span class="sig">CreateTableS8Response createTable(CreateTableS8Request)</span></dd>
  <dt>getRow(request)</dt><dd><span class="sig">GetRowS8Response getRow(GetRowS8Request)</span></dd>
  <dt>getRow(tableId, rowKey)</dt><dd>Convenience. <span class="sig">default GetRowS8Response getRow(String, String)</span></dd>
  <dt>putRow(request)</dt><dd><span class="sig">PutRowS8Response putRow(PutRowS8Request)</span></dd>
  <dt>selectRows(request)</dt><dd>Filter with <code>S8Filter&lt;T&gt;</code>. <span class="sig">&lt;T extends RowS8Object&gt; SelectRowsS8Response&lt;T&gt; selectRows(SelectRowsS8Request&lt;T&gt;)</span></dd>
</dl>
<h2 id="row">RowS8Object</h2>
<p>Abstract row. Final <code>S8_key</code>. Annotate the class with <code>@S8RowType(name=…)</code>. Row type names are a storage contract: evolve by introducing a new type and migrating, not by silently reshaping the old one.</p>
<h2 id="example">Example</h2>
{code}
<div class="intent"><strong>Intent</strong> Use tables when you want key/value speed with typed Java objects and optional in-process filters — not when you need a versioned graph (that is spaces / repositories).</div>
""".format(
        code=codebox(
            "users.java",
            "java",
            """
@S8RowType(name = "user-v1")
public class UserRow extends RowS8Object {
  public String email;
  public UserRow(String id) { super(id); }
}

TablesDB db = flow.tables();
db.createTable(new CreateTableS8Request("users", true));
UserRow row = new UserRow("u-42");
row.email = "ada@stack8.tech";
db.putRow(new PutRowS8Request("users", row, true, true));
GetRowS8Response got = db.getRow("users", "u-42");
if (got.status == GetRowS8Response.Status.OK) {
  UserRow u = (UserRow) got.record;
}
""",
        )
    ),
)

emit(
    "docs/api/spaces.html",
    "SpacesDB",
    "Spaces are shells for object graphs: logical unit, storage unit, version unit.",
    "/docs/api/spaces.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / SpacesDB</p>
<h1>SpacesDB</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.api.flow.space</span></div>
<p>A space is a shell around an object graph: logical unit, synchronization unit, storage unit, version unit, encapsulation. Unpinned leaves are transient; nodes that extend <code>SpaceS8Object</code> are the graph the runtime tracks.</p>
<h2 id="methods">Instance methods</h2>
<dl class="deflist">
  <dt>createSpace(request)</dt><dd>Create with an id and an exposure array. <span class="sig">CreateSpaceS8Response createSpace(CreateSpaceS8Request)</span></dd>
  <dt>exposeSpace(request)</dt><dd>Change what a space exposes. <span class="sig">ExposeSpaceS8Response exposeSpace(ExposeSpaceS8Request)</span></dd>
  <dt>accessSpace(request)</dt><dd>Open a space; on OK, <code>objects</code> is the exposure. <span class="sig">AccessSpaceS8Response accessSpace(AccessSpaceS8Request)</span></dd>
</dl>
<h2 id="objects">SpaceS8Object / SpaceS8Vertex</h2>
<p>Base space object holds <code>S8_vertex</code>. Report field updates with <code>reportFieldUpdate</code> / <code>reportChange(fieldName)</code> so the graph can dirty-track.</p>
<h2 id="example">Example</h2>
{code}
<div class="intent"><strong>Intent</strong> One space ≈ one project, one user workspace, one document. Keep the graph together; do not explode it into unrelated tables.</div>
""".format(
        code=codebox(
            "space.java",
            "java",
            """
SpacesDB spaces = flow.spaces();
spaces.createSpace(new CreateSpaceS8Request(
    "space/ada", new SpaceS8Object[]{ root }));
AccessSpaceS8Response res =
    spaces.accessSpace(new AccessSpaceS8Request("space/ada", true));
if (res.status == AccessSpaceS8Response.Status.OK) {
  Object[] exposed = res.objects;
}
""",
        )
    ),
)

emit(
    "docs/api/repositories.html",
    "RepositoriesDB",
    "Git-like object repositories: branches, commits, forks, clones of RepoS8Object graphs.",
    "/docs/api/repositories.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / RepositoriesDB</p>
<h1>RepositoriesDB</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.api.flow.repository</span></div>
<p>Repository DB behaves like a git-saved codebase, but with plain objects instead of files. Addresses, branches, versions, authors, comments.</p>
<h2 id="methods">Instance methods</h2>
<dl class="deflist">
  <dt>createRepository</dt><dd>Name, address, branch, initial objects, commit message.</dd>
  <dt>getRepository / getBranch</dt><dd>Metadata: <code>S8RepositoryMetadata</code>, <code>S8BranchMetadata</code>.</dd>
  <dt>forkRepository / forkBranch</dt><dd>Fork the object graph the way you would fork a repo.</dd>
  <dt>commitBranch</dt><dd>Commit a new version of the graph.</dd>
  <dt>cloneBranch</dt><dd>Clone at a version, often <code>S8SyncFlow.HEAD_VERSION</code>.</dd>
  <dt>deleteRepository</dt><dd>Remove a repository.</dd>
</dl>
<h2 id="objects">RepoS8Object</h2>
<p>Binds <code>_S8_vertex</code> via <code>RepoS8Vertex.FACTORY.createRepoS8Vertex(this)</code>. Use it as the node type of anything you want versioned like source.</p>
<h2 id="example">Example</h2>
{code}
<div class="intent"><strong>Intent</strong> When the data <em>is</em> the product — CAD, a document, a model — put it in a repository so history, fork, and clone are native.</div>
""".format(
        code=codebox(
            "repo.java",
            "java",
            """
RepositoriesDB repos = flow.repositories();
repos.createRepository(new CreateRepositoryS8Request(
    "MyRepo", "repo/ada/demo", "demo", "main",
    new RepoS8Object[]{ root }, "initial commit"));
CloneBranchS8Response clone = repos.cloneBranch(
    new CloneBranchS8Request("repo/ada/demo", "main"));
""",
        )
    ),
)

emit(
    "docs/api/mail.html",
    "Mail",
    "Send HTML mail from an S8SyncFlow through MailManager and S8MailComposer.",
    "/docs/api/mail.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / Mail</p>
<h1 class="plain">Mail</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.api.flow.mail</span></div>
<p>Outbound mail is a flow feature, not a sidecar SMTP client you wire yourself.</p>
<h2 id="manager">MailManager</h2>
<dl class="deflist">
  <dt>sendMail(request)</dt>
  <dd><span class="sig">SendMailS8Response sendMail(SendMailS8Request)</span></dd>
</dl>
<p><code>SendMailS8Request</code> takes <code>(boolean isOutOfFlow, S8MailComposing)</code>. The composing lambda receives an <code>S8MailComposer</code> with fluent HTML helpers: <code>setDisplayedSender</code>, <code>setRecipient</code>, <code>setSubject</code>, <code>html_appendBaseElement</code>.</p>
<h2 id="example">Example</h2>
{code}
""".format(
        code=codebox(
            "mail.java",
            "java",
            """
flow.mail().sendMail(new SendMailS8Request(false, composer -> {
  composer.setDisplayedSender("App")
      .setRecipient("user@example.com")
      .setSubject("Welcome")
      .html_appendBaseElement("p", null, null, "Hello from S8");
}));
""",
        )
    ),
)

emit(
    "docs/api/annotations.html",
    "Annotations",
    "S8ObjectType, S8Field, S8Method, S8RowType, S8Serial — how types are declared to the stack.",
    "/docs/api/annotations.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / Annotations</p>
<h1 class="plain">Annotations</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.api.annotations</span></div>
<p>S8 discovers structure from annotations on your types. This is the persistency and front contract.</p>
<h2 id="catalog">Catalog</h2>
<table class="params">
  <thead><tr><th>Annotation</th><th>Target</th><th>Members</th></tr></thead>
  <tbody>
    <tr><td><code>@S8ObjectType</code></td><td>TYPE</td><td><code>name()</code>, <code>sub()</code></td></tr>
    <tr><td><code>@S8Field</code></td><td>FIELD</td><td><code>name()</code>, <code>export()</code></td></tr>
    <tr><td><code>@S8Getter</code> / <code>@S8Setter</code></td><td>METHOD / FIELD</td><td><code>name()</code> (getter also <code>export</code>)</td></tr>
    <tr><td><code>@S8Method</code></td><td>METHOD</td><td><code>name()</code>, <code>flow()</code>, <code>props()</code>, <code>mask()</code></td></tr>
    <tr><td><code>@S8Param</code></td><td>PARAMETER</td><td><code>name()</code>, <code>flow()</code>, <code>props()</code>, <code>mask()</code></td></tr>
    <tr><td><code>@S8RowType</code></td><td>TYPE</td><td><code>name()</code> — fixed storage; evolve via a new type</td></tr>
    <tr><td><code>@S8Serial</code></td><td>FIELD</td><td>marker</td></tr>
    <tr><td><code>@S8SerialType</code></td><td>TYPE</td><td><code>name()</code>, <code>sub()</code></td></tr>
  </tbody>
</table>
<div class="intent"><strong>Intent</strong> The name you put in the annotation is the wire name. Keep it stable. Rename Java identifiers freely; do not rename wire names without a migration.</div>
""",
)

emit(
    "docs/api/serial.html",
    "Serial and bytes",
    "S8Serializable, S8SerialPrototype, ByteInflow / ByteOutflow — the binary protocol.",
    "/docs/api/serial.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / Serial</p>
<h1 class="plain">Serial &amp; bytes</h1>
<div class="badge-row">
  <span class="badge badge-api">com.s8.meta.api.serial</span>
  <span class="badge">com.s8.meta.api.bytes</span>
</div>
<p>Vertices publish through a typed binary protocol. You implement <code>S8Serializable</code> when you have a value object that must cross the wire with a known prototype.</p>
<h2 id="serializable">S8Serializable</h2>
<dl class="deflist">
  <dt>serialize(outflow)</dt><dd>Write this value.</dd>
  <dt>getSerialPrototype()</dt><dd>The prototype that can read it back.</dd>
  <dt>bytecount()</dt><dd>Encoded size.</dd>
  <dt>deepClone()</dt><dd>Structural clone.</dd>
</dl>
<h2 id="prototype">S8SerialPrototype</h2>
<p><code>deserialize(inflow, bytecount)</code>, <code>hasDelta</code>, <code>getSerialType()</code>, <code>getFrontType()</code>. Prototypes are how polymorphic values pick a factory.</p>
<h2 id="bytes">ByteInflow / ByteOutflow</h2>
<p>Typed binary codec: UInt7x, Bool8 codes, arrays and strings length-prefixed with UInt32, and so on. <code>Bool64</code> exposes bit constants <code>BIT00…</code> used as request flags. <code>MemoryFootprint</code> accounts instance/ref/entry/byte cost.</p>
<div class="intent"><strong>Intent</strong> You rarely call the codec directly. You feel it as compact deltas on the front and as versionable object graphs in repositories.</div>
""",
)

emit(
    "docs/api/scripts.html",
    "Scripts",
    "S8Script and S8ScriptRunner — devops against a live flow.",
    "/docs/api/scripts.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/api/">API</a> / Scripts</p>
<h1 class="plain">Scripts</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.api.script</span></div>
<p>Scripts are for devops: correct a database entry by hand, seed a service with presets, run a one-shot migration. They receive the same <code>S8SyncFlow</code> as a web request, without a front.</p>
<h2 id="types">Types</h2>
<dl class="deflist">
  <dt>S8Script.run(flow)</dt><dd><span class="sig">void run(S8SyncFlow flow) throws S8FlowException</span></dd>
  <dt>S8ScriptRunner.run(user, script)</dt><dd>Execute as a given user.</dd>
  <dt>S8ScriptRunnerFactory.createScriptRunner(configPathname, bootLayerOrigin)</dt><dd>Loaded as <code>S8.SCRIPT_RUNNER_FACTORY</code>.</dd>
</dl>
<h2 id="example">Example</h2>
{code}
<div class="intent"><strong>Intent</strong> Prefer a script over a throwaway SQL console. The types, annotations, and access control are the same as production.</div>
""".format(
        code=codebox(
            "seed.java",
            "java",
            """
S8ScriptRunner runner = S8.SCRIPT_RUNNER_FACTORY.createScriptRunner(
    "/path/to/config.xml", LaunchServer.class);
runner.run(adminUser, flow -> {
  flow.tables().getRow("users", "u-1");
});
""",
        )
    ),
)

emit(
    "docs/modules/index.html",
    "Module system",
    "S8-meta-env: sibling modules under a stack root, DEV vs PROD overlay.",
    "/docs/modules/",
    """
<p class="crumb"><a href="/docs/">Docs</a> / Modules</p>
<h1 class="plain">Module system</h1>
<div class="badge-row"><span class="badge badge-api">S8-meta-env</span></div>
<p>S8 modules do not nest. They are siblings under a stack root. The overlay is which root you are standing on: a git checkout (DEV) or a built tree of jars (PROD).</p>
<h2 id="layout">Layout</h2>
<p>Typical checkout at <code>{dev.stack}/{target}/</code>:</p>
<table class="params">
  <thead><tr><th>Path</th><th>Role</th></tr></thead>
  <tbody>
    <tr><td><code>sources/</code></td><td>Java sources and <code>module-info.java</code></td></tr>
    <tr><td><code>build.properties</code></td><td>Identity and dependencies</td></tr>
    <tr><td><code>web-sources/</code></td><td>Front JS/CSS (optional)</td></tr>
    <tr><td><code>static-assets/</code></td><td>Static/service assets (optional)</td></tr>
    <tr><td><code>demos/</code>, <code>tools/</code>, <code>dev-ops/</code></td><td>Extra Java folded in at compile</td></tr>
    <tr><td><code>guidelines/</code></td><td>Copied to prod when present</td></tr>
    <tr><td><code>forge/</code></td><td>Build scratch, cleaned each build</td></tr>
  </tbody>
</table>
<h2 id="wiring">Required wiring</h2>
<ol>
  <li>A root class with <code>public static final S8Module MODULE</code>.</li>
  <li><code>module-info.java</code> annotated <code>@S8ModuleDescriptor(def = RootClass.class)</code>.</li>
  <li><a href="/docs/build/properties.html"><code>build.properties</code></a>.</li>
</ol>
<p>Runtime resolution: <code>S8Module.getMode()</code> looks at whether the code source path sits under the prod root or the dev root. Web sources resolve to <code>web-sources</code> in DEV and <code>web-classes</code> in PROD.</p>
<p>Continue with <a href="/docs/modules/s8-module.html">S8Module</a> and <a href="/docs/modules/s8-env.html">S8Env</a>.</p>
""",
)

emit(
    "docs/modules/s8-module.html",
    "S8Module",
    "Runtime façade for an S8 module: target, mode, web sources, codebase.",
    "/docs/modules/s8-module.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/modules/">Modules</a> / S8Module</p>
<h1>S8Module</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.env.modular.S8Module</span></div>
<p>Runtime façade. Constructed once as a static <code>MODULE</code> field on the module's root class. The constructor runs an <code>S8ModuleParamsSetter</code> so you can declare web sources, static assets, and Bohr type registries.</p>
<h2 id="constructor">Constructor</h2>
<dl class="deflist">
  <dt>S8Module(target, rootClass, setter)</dt>
  <dd><code>target</code> is the folder name under the stack root, e.g. <code>"S8-pkgs-ui-carbide"</code>.</dd>
</dl>
<h2 id="parameters">S8ModuleParameters</h2>
<dl class="deflist">
  <dt>setVersion</dt><dd>Module version string.</dd>
  <dt>declareWebSources()</dt><dd>Enable <code>web-sources</code> / <code>web-classes</code> resolution.</dd>
  <dt>setWebAssets / setSvcAssets</dt><dd>Asset roots.</dd>
  <dt>addRowClasses / addSpaceClasses / addRepoClasses</dt><dd>Populate <code>S8Codebase</code> for Bohr DB.</dd>
</dl>
<h2 id="example">Example</h2>
{code1}
{code2}
<div class="intent"><strong>Intent</strong> The Java module and the S8 module are cousins. JPMS exports types; <code>S8Module</code> knows where the files live on disk in DEV and PROD.</div>
""".format(
        code1=codebox(
            "S8PkgsUiCarbide.java",
            "java",
            """
public class S8PkgsUiCarbide {
  public final static S8Module MODULE = new S8Module(
      "S8-pkgs-ui-carbide",
      S8PkgsUiCarbide.class,
      params -> {
        params.declareWebSources();
      });
}
""",
        ),
        code2=codebox(
            "module-info.java",
            "java",
            """
@S8ModuleDescriptor(def = S8PkgsUiCarbide.class)
module com.s8.pkgs.ui.carbide {
  exports com.s8.pkgs.ui.carbide;
  requires transitive com.s8.meta.env;
  requires transitive com.s8.meta.api;
}
""",
        ),
    ),
)

emit(
    "docs/modules/s8-env.html",
    "S8Env and modes",
    "S8Env.LOCAL, S8Mode DEV/PROD, and /etc/s8-conf.properties.",
    "/docs/modules/s8-env.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/modules/">Modules</a> / S8Env</p>
<h1>S8Env</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.env.environment</span></div>
<p>Global environment, loaded from <code>/etc/s8-conf.properties</code> as <code>S8Env.LOCAL</code>.</p>
<h2 id="conf">Machine config</h2>
{code}
<h2 id="mode">S8Mode</h2>
<ul>
  <li><code>DEV</code> — <code>isJar() == false</code>, sources under <code>dev.stack</code>.</li>
  <li><code>PROD</code> — <code>isJar() == true</code>, jars under <code>prod.stack</code>.</li>
  <li><code>UNDEFINED</code> — not yet resolved.</li>
</ul>
<p><code>S8Env.getRootPath(mode)</code>, <code>getDevRootPath()</code>, <code>getProdRootPath()</code> are the path helpers the rest of the stack uses.</p>
<p><code>S8ModuleUtilities.retrieveS8Counterpart(Module, verbose)</code> reflects the static <code>MODULE</code> field declared by <code>@S8ModuleDescriptor</code>.</p>
<div class="note"><strong>Registry</strong> <code>S8Modules.CENTER</code> exists; lookup methods are currently commented out. The live pattern is <code>SomeClass.MODULE</code>.</div>
""".format(
        code=codebox(
            "/etc/s8-conf.properties",
            "properties",
            """
JAVA_HOME = /Library/Java/JavaVirtualMachines/temurin-25.jdk/Contents/Home
dev.stack = /Users/you/qx/git
prod.stack = /Users/you/stack
""",
        )
    ),
)

emit(
    "docs/build/index.html",
    "Build system",
    "S8-meta-build compiles the DAG of modules into the prod stack.",
    "/docs/build/",
    """
<p class="crumb"><a href="/docs/">Docs</a> / Build</p>
<h1 class="plain">Build system</h1>
<div class="badge-row"><span class="badge badge-api">S8-meta-build</span></div>
<p>Developers work under <code>dev.stack</code>. <code>S8StackBuilder</code> walks the dependency DAG, compiles each module with <code>javac --module-path</code> against already-built jars on <code>prod.stack</code>, packages <code>{target}.jar</code>, and mirrors web/static assets into prod.</p>
<h2 id="pipeline">Per-module pipeline</h2>
<ol>
  <li>Working dir = <code>{dev}/{target}</code>.</li>
  <li>Clean <code>forge/</code>; create <code>forge/java</code>, <code>forge/classes</code>.</li>
  <li>Copy <code>sources</code> (and optional <code>demos</code>, <code>tools</code>, <code>dev-ops</code>) into <code>forge/java/{module.java}/</code>.</li>
  <li>Compile: <code>javac --module-path {prod jars of deps} -d forge/classes --module-source-path forge/java --module {module.java}</code>.</li>
  <li>Write <code>MANIFEST.MF</code> (<code>Build-Mode: prod</code>, optional <code>Main-Class</code>, <code>Class-Path</code>).</li>
  <li>Jar into <code>{prod}/{target}/classes/{target}.jar</code>.</li>
  <li>Copy <code>build.properties</code>, <code>sources/</code>, optional <code>guidelines/</code>, <code>web-sources/</code> → <code>web-classes/</code>, <code>static-assets/</code>.</li>
</ol>
<p>See <a href="/docs/build/properties.html">build.properties</a> and <a href="/docs/build/s8-stack-builder.html">S8StackBuilder</a>.</p>
""",
)

emit(
    "docs/build/properties.html",
    "build.properties",
    "Keys parsed by S8ModuleBuildProps: module.java, dependencies, main, author, module.web.",
    "/docs/build/properties.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/build/">Build</a> / build.properties</p>
<h1>build.properties</h1>
<div class="badge-row"><span class="badge badge-api">S8ModuleBuildProps</span></div>
<p>Parsed by <code>S8ModuleBuildProps.load(S8Mode mode, String targetName)</code>. The file lives at <code>STACK/TARGET/build.properties</code>.</p>
<h2 id="keys">Keys</h2>
<table class="params">
  <thead><tr><th>Key</th><th>Required</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td><code>module.java</code></td><td>yes</td><td>JPMS name (<code>com.s8....</code>). Used as <code>--module</code>.</td></tr>
    <tr><td><code>dependencies</code></td><td>no</td><td>Comma-separated <strong>target folder names</strong> (e.g. <code>S8-meta-env</code>), not Java names. Split on <code> *, *</code>.</td></tr>
    <tr><td><code>module.web</code></td><td>no</td><td>Web/logical name. Defaults to the target name.</td></tr>
    <tr><td><code>main</code></td><td>no</td><td>Fully qualified main class → <code>Main-Class</code> and bash launcher.</td></tr>
    <tr><td><code>author</code></td><td>no</td><td><code>Created-By</code> in the manifest.</td></tr>
    <tr><td><code>target</code></td><td>convention</td><td><strong>Not read by the loader.</strong> Target is the directory name passed to <code>load()</code>.</td></tr>
  </tbody>
</table>
<div class="warn"><strong>Trap</strong> Many files comment “dependencies (by JAVA name)”. The values are target folder names. Aloe’s comment is the correct one.</div>
<h2 id="examples">Examples</h2>
<h3>Leaf</h3>
{leaf}
<h3>Typical IO module</h3>
{io}
<h3>App with a main</h3>
{app}
""".format(
        leaf=codebox(
            "S8-meta-env/build.properties",
            "properties",
            """
module.java = com.s8.meta.env
#dependencies = <none>
target = S8-meta-env
""",
        ),
        io=codebox(
            "S8-base-io-JSON/build.properties",
            "properties",
            """
module.java = com.s8.base.io.json
dependencies = \\
  S8-meta-env, \\
  S8-meta-API
target = S8-base-io-JSON
""",
        ),
        app=codebox(
            "S8-pkgs-ui-aloe/build.properties",
            "properties",
            """
module.java = com.s8.pkgs.ui.aloe
dependencies = \\
  S8-meta-env, S8-meta-API, \\
  S8-pkgs-ui-carbide, S8-pkgs-io-SVG
target = S8-pkgs-ui-aloe
main = com.s8.pkgs.ui.aloe.LaunchServer
""",
        ),
    ),
)

emit(
    "docs/build/s8-stack-builder.html",
    "S8StackBuilder",
    "Walk the module DAG and compile with FORCE_REBUILD or LAZY_BUILD.",
    "/docs/build/s8-stack-builder.html",
    """
<p class="crumb"><a href="/docs/">Docs</a> / <a href="/docs/build/">Build</a> / S8StackBuilder</p>
<h1>S8StackBuilder</h1>
<div class="badge-row"><span class="badge badge-api">com.s8.meta.build.S8StackBuilder</span></div>
<p>Top-level builder. You pass a context and one or more required target names. It queues those modules plus their dependencies and builds until the graph is stable (or 8192 steps, which is treated as a circular-dependency error).</p>
<h2 id="constructor">Constructor</h2>
<dl class="deflist">
  <dt>S8StackBuilder(context, requiredTargetNames…)</dt>
  <dd><span class="sig">S8StackBuilder(S8BuildContext context, String... requiredTargetNames)</span></dd>
  <dt>build()</dt>
  <dd>Run the queue. <span class="sig">void build() throws IOException, S8CmdException, S8BuildException</span></dd>
</dl>
<h2 id="policy">BuildPolicy</h2>
<ul>
  <li><code>FORCE_REBUILD</code> — build if the module has DEV sources and has not been built in this run.</li>
  <li><code>LAZY_BUILD</code> — build only if the prod classes folder is missing.</li>
</ul>
<p>A module is buildable when every dependency the policy requires is already built (or already has prod classes — binary-only deps are allowed).</p>
<h2 id="example">Example</h2>
{code}
<p><code>BashGenerator</code> can then write <code>PROD/TARGET/TARGET_exec.sh</code>:</p>
<pre><code>java --module-path "$MODULE_PATH" --module "$MAIN_MODULE/$MAIN_CLASS" "$1"</code></pre>
""".format(
        code=codebox(
            "BuildAll.java",
            "java",
            """
S8BuildContext context = new S8BuildContext(BuildPolicy.FORCE_REBUILD);
new S8StackBuilder(context, "S8-pkgs-ui-aloe").build();
""",
        )
    ),
)
