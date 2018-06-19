<div class="main-wrapper" id="page-blog">
    <div class="hidden">
        {% assign index = false %}
        {% for blog in site.data.blogen %}
            {% if blog.link == 'from-agoras-to-tml' %}
                {% increment indexLoop %}
                {% assign index = indexLoop %}
                {% assign title = blog.title %}
                {% assign author = blog.author %}
                {% assign date = blog.date %}
                {% assign main_content = blog.main_content %}
            {% endif %}
        {% endfor %}
    </div>  
    <div id="roadmap">
            <div class="dont-skew width-100">
                <div class="content container blog">
                    {% include blog-header.html %}
                    <div class="row">
                        <div class="col-md-9">
                            <ul class="list-blog">
                                <li>
                                    <h3><a href="#">{{title}}</a></h3>
                                    <span class="author">{{author}}</span>
                                    <span class="dot"></span>
                                    <span class="date">{{date}}</span>
                                    <div class="blog-content">{{main_content}}</div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            {% include blog-archive.html %}
                        </div>
                    </div>
                </div>
            </div>
     </div>
    {% include networks.html %}
</div>