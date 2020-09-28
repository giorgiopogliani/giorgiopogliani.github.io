---
title:  "Livewire Datatables"
language: php
tags:
    - laravel
    - livewire
---

Who didn't need a table to show some data in a Laravel application at some point? I came a cross this recently while building a ticketing system. I was using Livewire, a cool new layer to make dynamics blade components without writing API. I will show you what I did.

Let's get started. We create the component with the artisan command line tool. 
```bash
php artisan livewire:make UserTable
```

The genereted component is something like this.
```php
namespace App\Http\Livewire;

use App\Models\User;
use Livewire\Component;

class UserTable extends Component
{
    public function render()
    {
        return view('livewire.user-table');
    }
}
```

Next we can add two custom properties like so. The `columns` property is an array that we will use to create the table headers in the HTML. I'll cover later what the `Column` class is. The `rows` property is the query to get the data we want. I like this approach as we can write any kind of query in here and can be tuned for this specific component.

```php
public function getColumnsProperty()
{
    return [
        Column::text('Name'),
        Column::text('Email'),
        Column::text('CreatedAt'),
    ];
}

public function getRowsProperty()
{
    $query = Ticket::query();

    $query->latest();

    return $query->paginate();
}
```

The column class is a very simple one. It's basically a fancy array with some usefull methods. I snake cased the title to create the key that will be used to get the property on the eloquent model. Calling a key like a function will set the value. So for example if we need a custom key not based on the title you can do ` $column->key('custom_key') `
```php
use Illuminate\Support\Str;

class Column
{
    protected array $options = [
        'format' => 'string', // default column type
    ];

    public function __construct(string $title)
    {
        $this->options['title'] = $title;
        $this->options['key'] = Str::snake($title);
    }

    public static function text(string $title)
    {
        return new static($title);
    }

    public function __call( $name, $arguments )
    {
        return tap($this, function($col) use ($name, $arguments) {
            $col->options[$name] = $arguments[0];
        });
    }

    public function __get( $name )
    {
        return $this->options[$name] ?? null;
    }
}
```

I wanted to use dot notation like ``details.address`` to get the value of the eloquent model so that I could reach relations on the model. To achieve this I added a simple trait to the model.

```php
trait CanHaveDataTable
{
    public function getValueFor(Column $column): ?string
    {
        $data = $this->toArray();

        return collect([$data])->pluck($column->key)->first();
    }
}
```
If you are familiar with the `pluck` function you can easly guess what I did. The `pluck` function can access values with the dot notation. So I converted the model (`$this`) to an array and wrapped it with an array and instantiated a `Collection` with the `collect` function.

Finally we can kick in some table templates in the blade file of the Livewire component. Here we have the two special custom properties. So all we need to do is iterate on those properties. I will use tailwind the get things pretty.

```html
<table class="table min-w-full border-collapse divide-y divide-gray-200 bg-white">
<thead>
    <tr>
        @foreach ($columns as $column)
            <th>{{$column->title}}</th>
        @endforeach
    </tr>
</thead>
<tbody>
    @forelse ($rows as $row)
        <tr>
            @foreach ($columns as $column)
                <td>
                    {{$row->getValueFor($column)}}
                </td>
            @endforeach
        </tr>
    @empty
        <tr>
            <td colspan="{{count($columns)}}" class="text-gray-500">
                {{ __('No records.')}}
            </td>
        </tr>
    @endforelse
</tbody>
</table>
```

And of course, if you called paginate on the query you can this snippet to have the links to paginate the table. Althogh, doing this way we will not use the dynamic feature of livewire because we would click another link and refresh the page. You can read the livewire documentation on "Using A Custom Pagination View", but the idea is to have custom links that will set the page.
```html
<div class="mt-5">
    {{ $rows->links() }}
</div>
```

But if you implement a little search input that will be dynamic and will use all the power of Livewire. We can edit the rows custom property like so. 
```php
public function getRowsProperty()
{
    $query = User::query();

    if ($this->search) {
        $query = $query->search($this->search);
    }

    return $query->paginate();
}
```

Hope you enjoy this little component I did. Send me your approach or how would you improve this. You can extend this to add more features or wrap everything in a trait or a package and power-up any model with a datatable.

You can found me on [Twitter](https://twitter.com/giorgiopogliani) or [Instagram](https://instagram.com/giorgiopogliani)!

