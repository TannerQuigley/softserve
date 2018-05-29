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
    IO.puts("MESSAG")

    port = list["options"]["port"]
    val = list["options"]["value"]

    {setInt, ""} = Integer.parse(val)
    IO.puts(setInt)

    case port do
	2 -> Blockytalky.GrovePi.set_component_value(:D2, 1)
	3 -> Blockytalky.GrovePi.set_component_value(:D3, 1)
	4 -> Blockytalky.GrovePi.set_component_value(:D4, 1)
	5 -> Blockytalky.GrovePi.set_component_value(:D5, 1)
	6 -> Blockytalky.GrovePi.set_component_value(:D6, 1)
	7 -> Blockytalky.GrovePi.set_component_value(:D7, 1)
	8 -> Blockytalky.GrovePi.set_component_value(:D8, 1)
	_ -> IO.puts("A non digital port was selected")
    end
    
  end

  def get_component_value_message(list) do
    IO.puts("message module got get value")
  end

end
