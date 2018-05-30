defmodule Web.GrovePiMessage do
    @moduledoc """
  handles JSON websocket messages to and from makecode (pxt) instance
  """

  
  def set_component_type_message(list) do
    IO.puts("message module got set type")
    
    port = list["options"]["port"]

    type = list["options"]["devType"]

    id = String.to_atom(type)

    IO.puts(type)

    case port do
        0 -> Blockytalky.GrovePi.set_component_type(:A0,id)
 	1 -> Blockytalky.GrovePi.set_component_type(:A1,id)
	2 -> Blockytalky.GrovePi.set_component_type(:A2,id)
	3 -> Blockytalky.GrovePi.set_component_type(:D3,id)
	4 -> Blockytalky.GrovePi.set_component_type(:D4,id)
	5 -> Blockytalky.GrovePi.set_component_type(:D5,id)
	6 -> Blockytalky.GrovePi.set_component_type(:D6,id)
	7 -> Blockytalky.GrovePi.set_component_type(:D7,id)
	8 -> Blockytalky.GrovePi.set_component_type(:D8,id)
    end

  end

  def set_component_value_message(list) do
    IO.puts("MESSAGE")

    port = list["options"]["port"]
    val = list["options"]["value"]

    {setInt, ""} = Integer.parse(val)

    case port do
	2 -> Blockytalky.GrovePi.set_component_value(:D2, setInt)
	3 -> Blockytalky.GrovePi.set_component_value(:D3, setInt)
	4 -> Blockytalky.GrovePi.set_component_value(:D4, setInt)
	5 -> Blockytalky.GrovePi.set_component_value(:D5, setInt)
	6 -> Blockytalky.GrovePi.set_component_value(:D6, setInt)
	7 -> Blockytalky.GrovePi.set_component_value(:D7, setInt)
	8 -> Blockytalky.GrovePi.set_component_value(:D8, setInt)
	_ -> IO.puts("A non digital port was selected")
    end
    
  end

  def get_component_value_message(list) do
    IO.puts("message module got get value")
  end

end
